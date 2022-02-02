import { ComponentType, createContext } from "react";
import { DefaultRenderer } from "../../renderers/DefaultRenderer";
import { BibItemProps } from "../../types";

export interface CiteContextValue {
  citeIds: Record<string, string>;
  setCiteIds: (ids: Record<string, string>) => void;
  BibItemRenderer: ComponentType<BibItemProps>;
}

export const CiteContext = createContext<CiteContextValue>({
  citeIds: {},
  setCiteIds: () => null,
  BibItemRenderer: DefaultRenderer,
});
