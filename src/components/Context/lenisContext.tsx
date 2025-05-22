'use client';
import React, { useEffect, ReactNode } from 'react';
import Lenis from 'lenis';


interface SmoothScrollComponentProps {
    children: ReactNode;
}

const SmoothScrollComponent: React.FC<SmoothScrollComponentProps> = ({ children }) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
};

export default SmoothScrollComponent;
