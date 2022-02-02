import { useCiteContext } from "../CiteContext/useCiteContext";

interface Props {
  id: string;
  className?: string;
  meta?: string;
}

export const Cite = ({ className, id, meta }: Props) => {
  const { bibliography, enumIds, citeFormatter } = useCiteContext();

  return (
    <a href={`#cite-${id}`} className={className || "cite-link"}>
      {citeFormatter(enumIds[id], bibliography[id], meta)}
    </a>
  );
};
