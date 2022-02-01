import { ReactNode, useEffect, useState } from "react";
import { BibliographyData, Locales } from "../types";
import { BibliographyItem } from "./BibliographyItem";
import { useCiteContext } from "../CiteContext/useCiteContext";

interface Props {
  className?: string;
  data: BibliographyData;
  locale?: Locales;
}

export const Bibliography = ({ data, locale }: Props) => {
  const { setCiteIds } = useCiteContext();
  const [references, setReferences] = useState<ReactNode[]>([]);

  useEffect(() => {
    const sortedBibliography = sortBibliography(data);
    const idMap: Record<string, string> = {};
    const components = sortedBibliography.map(([id, data], i) => {
      const renderId = `[${i + 1}]`;
      idMap[id] = renderId;
      return (
        <BibliographyItem
          key={id}
          id={`references-${id}`}
          data={data}
          locale={locale}
          renderId={renderId}
        />
      );
    });
    setCiteIds(idMap);
    setReferences(components);
  }, []);

  return <ul>{references}</ul>;
};

const sortBibliography = (bibliography: BibliographyData) => {
  return Object.entries(bibliography).sort(([, a], [, b]) => {
    const authorA = a.authors[0];
    const authorB = b.authors[0];

    if (authorA && authorB) {
      return a.authors[0].localeCompare(b.authors[0]);
    }
    if (authorA) {
      return 1;
    }
    return -1;
  });
};
