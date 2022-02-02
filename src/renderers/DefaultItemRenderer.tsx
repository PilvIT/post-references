import { BibItemProps, Journal } from "../types";
import { formatAuthors } from "../internal/Bibliography/formatAuthors";
import { renderPageNumbers } from "../internal/renderPageNumbers";

export const DefaultItemRenderer = ({ data, id, enumId }: BibItemProps) => {
  const authors: string = formatAuthors(data.authors);

  switch (data.type) {
    case "article":
      return (
        <li key={id} id={id}>
          <span>[{enumId}]</span>
          <span>
            {authors}. {data.year}. {data.title}.{" "}
            <JournalRenderer data={data.journal} />.
            {data.doi && (
              <>
                {" "}
                <a href={data.doi} target="_blank" rel="noreferrer">
                  {data.doi}
                </a>
                .
              </>
            )}
          </span>
        </li>
      );
    case "book":
      return (
        <li key={id} id={id}>
          <span>[{enumId}]</span>
          <span>
            {authors}. {data.year}. <em>{data.title}</em>. {data.publisher}.
          </span>
        </li>
      );
    case "web":
      return (
        <li key={id} id={id}>
          <span>[{enumId}]</span>
          <span>
            {authors}. {data.title}.{" "}
            <a href={data.href} target="_blank" rel="noreferrer">
              {data.href}
            </a>
            .
          </span>
        </li>
      );
    default:
      throw new Error("Exhaustive check encountered an undefined type.");
  }
};

interface JournalProps {
  data: Journal;
}

const JournalRenderer = ({ data }: JournalProps) => {
  return (
    <>
      <em>{data.name}</em>, Volume {data.volume}, Issue {data.issue}
      {data.pages && <>, Pages {renderPageNumbers(data.pages)}</>}
    </>
  );
};
