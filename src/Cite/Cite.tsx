import { useCiteContext } from "../CiteContext/useCiteContext";

interface Props {
  id: string;
}

export const Cite = ({ id }: Props) => {
  const { citeIds } = useCiteContext();

  return <a href={`#references-${id}`}>{citeIds[id]}</a>;
};
