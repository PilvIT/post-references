export type CiteType = "book" | "web";
export type Locales = "en" | "fi";

interface CiteBase {
  type: CiteType;
  authors: string[];
  title: string;
  year: number;
}

interface BookCite extends CiteBase {
  type: "book";
  publisher: string;
}

interface WebCite extends CiteBase {
  type: "web";
  href: `http${string}`;
}

export type CiteData = BookCite | WebCite;

export type BibliographyData = Record<string, CiteData>;
