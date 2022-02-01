import { useCiteContext } from "../CiteContext/useCiteContext";

interface Props {
  id: string;
  className?: string;
}

export const Cite = ({ className, id }: Props) => {
  const { citeIds } = useCiteContext();

  return (
    <a href={`#references-${id}`} className={className || "cite-link"}>
      {citeIds[id]}
    </a>
  );
};
