import * as rtl from "@testing-library/react";
import { DefaultItemRenderer } from "./DefaultItemRenderer";
import { ArticleCite } from "../types";

describe("<DefaultRenderer />", () => {
  it("should render article reference with page numbers", () => {
    const data: ArticleCite = {
      type: "article",
      title: "Literate Programming",
      authors: ["Donald E. Knuth"],
      year: 1984,
      journal: {
        name: "The Computer Journal",
        issue: 2,
        volume: 27,
        pages: [97, 111],
      },
      doi: "https://doi.org/10.1093/comjnl/27.2.97",
    };
    const { container } = rtl.render(
      <DefaultItemRenderer data={data} enumId="1" id="knuth" />
    );

    expect(container.textContent).toEqual(
      "[1]Donald E. Knuth. 1984. Literate Programming. The Computer Journal, Volume 27, Issue 2, Pages 97–111. https://doi.org/10.1093/comjnl/27.2.97."
    );
    expect(rtl.screen.getByText("The Computer Journal").tagName).toEqual("EM");

    const doiLink = rtl.screen.getByRole("link", {
      name: data.doi,
    });
    expect(doiLink).toHaveAttribute("href", data.doi);
    expect(doiLink).toHaveAttribute("target", "_blank");
    expect(doiLink).toHaveAttribute("rel", "noreferrer");
  });

  it("should render web reference", () => {
    const { container } = rtl.render(
      <DefaultItemRenderer
        data={{
          type: "web",
          title: "TeX",
          authors: ["Wikipedia"],
          year: 2022,
          href: "https://en.wikipedia.org/wiki/TeX",
        }}
        enumId="1"
        id="tex"
      />
    );

    expect(container.textContent).toEqual(
      "[1]Wikipedia. TeX. https://en.wikipedia.org/wiki/TeX."
    );
  });

  it("should render book reference", () => {
    const { container } = rtl.render(
      <DefaultItemRenderer
        data={{
          type: "book",
          title: "Structure and Interpretation of Computer Programs",
          authors: ["Harold Abelson", "Gerald Jay Sussman", "Julie Sussman"],
          year: 1985,
          publisher: "MIT Press",
        }}
        enumId="1"
        id="sicp"
      />
    );
    expect(container.textContent).toEqual(
      "[1]Harold Abelson, Gerald Jay Sussman, and Julie Sussman. 1985. Structure and Interpretation of Computer Programs. MIT Press."
    );
    expect(
      rtl.screen.getByText("Structure and Interpretation of Computer Programs")
        .tagName
    ).toEqual("EM");
  });

  it("should throw if type is supported", () => {
    const render = () =>
      rtl.render(
        <DefaultItemRenderer
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          data={{ type: "news", authors: ["John Doe"] }}
          enumId="1"
          id="helsingin-sanomat"
        />
      );
    expect(render).toThrow();
  });
});
