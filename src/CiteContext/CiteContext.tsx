import { createContext } from "react";

interface Value {
  citeIds: Record<string, string>;
  setCiteIds: (ids: Record<string, string>) => void;
}

export const CiteContext = createContext<Value>({
  citeIds: {},
  setCiteIds: () => null,
});
