import { CiteContext } from "./CiteContext";
import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

export const CiteContextProvider = ({ children }: Props) => {
  const [citeIds, setCiteIds] = useState<Record<string, string>>({});

  return (
    <CiteContext.Provider value={{ citeIds, setCiteIds }}>
      {children}
    </CiteContext.Provider>
  );
};
