import { CiteFormatter } from "../types";

export const defaultCiteFormatter: CiteFormatter = (enumId, data, meta) => {
  return meta ? `[${enumId}, ${meta}]` : `[${enumId}]`;
};
