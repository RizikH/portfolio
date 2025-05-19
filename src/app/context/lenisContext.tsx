// src/app/context/LenisContext.tsx
'use client';

import { createContext, useContext, useEffect, useRef, useState, ReactNode } from 'react';
import Lenis, { LenisOptions } from 'lenis';

type LenisContextType = {
    lenis: Lenis | null;
    scroll: number;
};

const LenisContext = createContext<LenisContextType | null>(null);

export const useLenis = () => {
    const context = useContext(LenisContext);
    if (!context) throw new Error("useLenis must be used within a LenisProvider");
    return context;
};

interface Props {
    children: ReactNode;
}

declare global {
    interface Window {
        lenis?: Lenis;
    }
}

export const LenisProvider = ({ children }: Props) => {
    const lenisRef = useRef<Lenis | null>(null);
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.1,
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        } as LenisOptions);

        lenisRef.current = lenis;

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        lenis.on('scroll', (e: { scroll: number }) => {
            setScroll(e.scroll);
        });

        requestAnimationFrame(raf);
        window.lenis = lenis;

        return () => {
            lenis.destroy();
            delete window.lenis;
        };
    }, []);

    return (
        <LenisContext.Provider value={{ lenis: lenisRef.current, scroll }}>
            {children}
        </LenisContext.Provider>
    );
};
