import { ReactNode, useEffect, useState } from "react";
import { BibliographyData } from "../../types";
import { useCiteContext } from "../CiteContext/useCiteContext";

interface Props {
  className?: string;
  data: BibliographyData;
}

export const Bibliography = ({ className, data }: Props) => {
  const { setCiteIds, BibItemRenderer } = useCiteContext();
  const [references, setReferences] = useState<ReactNode[]>([]);

  useEffect(() => {
    const sortedBibliography = sortBibliography(data);
    const idMap: Record<string, string> = {};
    const components = sortedBibliography.map(([id, data], i) => {
      const renderId = `[${i + 1}]`;
      idMap[id] = renderId;
      return (
        <BibItemRenderer
          key={id}
          id={`references-${id}`}
          data={data}
          enumId={renderId}
        />
      );
    });
    setCiteIds(idMap);
    setReferences(components);
  }, []);

  return <ul className={className || "bibliography"}>{references}</ul>;
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
