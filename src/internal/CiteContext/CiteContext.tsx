import { ComponentType, createContext } from "react";
import { DefaultItemRenderer } from "../../renderers/DefaultItemRenderer";
import { BibItemProps, BibliographyData, CiteFormatter } from "../../types";

export interface CiteContextValue {
  bibliography: BibliographyData;
  setBibliography: (data: BibliographyData) => void;
  enumIds: Record<string, string>;
  setEnumIds: (ids: Record<string, string>) => void;
  citeFormatter: CiteFormatter;
  BibItemRenderer: ComponentType<BibItemProps>;
}

export const CiteContext = createContext<CiteContextValue>({
  bibliography: {},
  setBibliography: () => null,
  citeFormatter: () => "",
  enumIds: {},
  setEnumIds: () => null,
  BibItemRenderer: DefaultItemRenderer,
});
