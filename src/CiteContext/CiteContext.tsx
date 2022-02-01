import { createContext } from "react";

export interface CiteContextValue {
  citeIds: Record<string, string>;
  setCiteIds: (ids: Record<string, string>) => void;
}

export const CiteContext = createContext<CiteContextValue>({
  citeIds: {},
  setCiteIds: () => null,
});
