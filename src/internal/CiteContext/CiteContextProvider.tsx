import { CiteContext } from "./CiteContext";
import { ComponentType, ReactNode, useState } from "react";
import { BibItemProps } from "../../types";

interface Props {
  children: ReactNode;
  citationRenderer?: () => void;
  BibItemRenderer: ComponentType<BibItemProps>;
}

export const CiteContextProvider = ({ children, BibItemRenderer }: Props) => {
  const [citeIds, setCiteIds] = useState<Record<string, string>>({});

  return (
    <CiteContext.Provider value={{ citeIds, setCiteIds, BibItemRenderer }}>
      {children}
    </CiteContext.Provider>
  );
};
