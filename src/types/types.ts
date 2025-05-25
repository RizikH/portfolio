import { StaticImageData } from 'next/image';

export type Project = {
  slug: string;
  name: string;
  mainImage: StaticImageData;
  shortDescription: string;
  sections: Section[];
};

type Section = {
  title: string;
  gallery?: { image: StaticImageData; label: string }[];
  tech?: { name: string; reason: string }[];
  points?: string[];
};