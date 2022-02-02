export const renderPageNumbers = (range: number | [number, number]): string => {
  if (typeof range === "number") {
    return `${range}`;
  }

  return `${range[0]}–${range[1]}`;
};
