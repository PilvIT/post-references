export const formatAuthors = (authors: string[]): string => {
  if (authors.length > 1) {
    const authorsMultiple: string = authors.slice(0, -1).join(", ");
    const authorsLast: string = authors[authors.length - 1];

    return `${authorsMultiple}, and ${authorsLast}`;
  }

  return authors[0];
};
