import { CiteData, Locales } from "../types";
import { formatAuthors } from "./formatAuthors";

interface Props {
  data: CiteData;
  id: string;
  locale?: Locales;
  renderId: string;
}

export const BibliographyItem = ({ data, id, renderId, locale }: Props) => {
  const authors: string = formatAuthors(data.authors, locale);

  switch (data.type) {
    case "book":
      return (
        <li key={id} id={id}>
          <span>{renderId}</span>{" "}
          <span>
            {authors}. {data.year}. <em>{data.title}</em>. {data.publisher}.
          </span>
        </li>
      );
    case "web":
      return (
        <li key={id} id={id}>
          <span>{renderId}</span>{" "}
          <span>
            {authors}. <em>{data.title}</em>.{" "}
            <a href={data.href} target="_blank" rel="noreferrer">
              {data.href}
            </a>
            .
          </span>
        </li>
      );
    default:
      return null;
  }
};
