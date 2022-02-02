import { ReactNode, useEffect, useState } from "react";
import { BibliographyData } from "../../types";
import { sortBibliography } from "./sortBibliography";
import { useCiteContext } from "../CiteContext/useCiteContext";

interface Props {
  className?: string;
  data: BibliographyData;
}

export const Bibliography = ({ className, data }: Props) => {
  const { setBibliography, setEnumIds, BibItemRenderer } = useCiteContext();
  const [references, setReferences] = useState<ReactNode[]>([]);

  useEffect(() => {
    const sortedBibliography = sortBibliography(data);
    const idMap: Record<string, string> = {};
    const components = sortedBibliography.map(([id, data], i) => {
      const enumId = `${i + 1}`;
      idMap[id] = enumId;
      return (
        <BibItemRenderer
          key={id}
          id={`cite-${id}`}
          data={data}
          enumId={enumId}
        />
      );
    });
    setBibliography(data);
    setEnumIds(idMap);
    setReferences(components);
  }, []);

  return <ul className={className || "bibliography"}>{references}</ul>;
};
