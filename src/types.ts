import { ReactNode } from "react";

export type CiteType = "article" | "book" | "web";

interface CiteBase {
  type: CiteType;
  authors: string[];
  title: string;
  year: number;
}

export interface Journal {
  name: string;
  volume: number;
  issue: number;
  article?: number;
  pages?: [number, number];
}

export interface ArticleCite extends CiteBase {
  type: "article";
  href?: `http${string}`;
  journal: Journal;
  doi: `https://doi.org/${string}`;
}

export interface BookCite extends CiteBase {
  type: "book";
  publisher: string;
}

export interface WebCite extends CiteBase {
  type: "web";
  href: `http${string}`;
}

export type CiteData = ArticleCite | BookCite | WebCite;

export type BibliographyData = Record<string, CiteData>;

export interface BibItemProps {
  data: CiteData;
  enumId: string;
  id: string;
}

export type CiteFormatter = (
  enumId: string,
  data: CiteData,
  meta?: string
) => ReactNode;
