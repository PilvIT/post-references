import { BibItemProps, BibliographyData, CiteFormatter } from "../../types";
import { ComponentType, ReactNode, useState } from "react";
import { CiteContext } from "./CiteContext";
import { DefaultItemRenderer } from "../../renderers/DefaultItemRenderer";
import { defaultCiteFormatter } from "../../renderers/defaultCiteFormatter";

interface Props {
  children: ReactNode;
  citeFormatter?: CiteFormatter;
  BibItemRenderer?: ComponentType<BibItemProps>;
}

export const CiteContextProvider = ({
  children,
  citeFormatter = defaultCiteFormatter,
  BibItemRenderer = DefaultItemRenderer,
}: Props) => {
  const [bibliography, setBibliography] = useState<BibliographyData>({});
  const [enumIds, setEnumIds] = useState<Record<string, string>>({});

  return (
    <CiteContext.Provider
      value={{
        bibliography,
        setBibliography,
        citeFormatter,
        enumIds,
        setEnumIds,
        BibItemRenderer,
      }}
    >
      {children}
    </CiteContext.Provider>
  );
};
