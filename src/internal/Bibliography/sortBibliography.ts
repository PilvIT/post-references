import { BibliographyData } from "../../types";

export const sortBibliography = (bibliography: BibliographyData) => {
  return Object.entries(bibliography).sort(([, a], [, b]) => {
    const authorA = a.authors[0];
    const authorB = b.authors[0];

    return authorA.localeCompare(authorB);
  });
};
