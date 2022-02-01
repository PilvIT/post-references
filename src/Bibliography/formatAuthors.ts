import { Locales } from "../types";

export const formatAuthors = (authors: string[], locale?: Locales): string => {
  if (authors.length > 1) {
    const authorsMultiple: string = authors.slice(0, -1).join(", ");
    const authorsLast: string = authors[authors.length - 1];

    if (locale === "fi") {
      return `${authorsMultiple} ja ${authorsLast}`;
    }
    return `${authorsMultiple}, and ${authorsLast}`;
  }

  return authors[0];
};
