import * as rtl from "@testing-library/react";
import { Bibliography } from "./Bibliography";

describe("<Bibliography />", () => {
  it("should render web reference", () => {
    const { container } = rtl.render(
      <Bibliography
        data={{
          tex: {
            type: "web",
            title: "TeX",
            authors: ["Wikipedia"],
            year: 2022,
            href: "https://en.wikipedia.org/wiki/TeX",
          },
        }}
      />
    );

    expect(container.textContent).toEqual(
      "[1] Wikipedia. TeX. https://en.wikipedia.org/wiki/TeX."
    );
  });

  it("should render book reference", () => {
    const { container } = rtl.render(
      <Bibliography
        data={{
          sicp: {
            type: "book",
            title: "Structure and Interpretation of Computer Programs",
            authors: ["Harold Abelson", "Gerald Jay Sussman", "Julie Sussman"],
            year: 1985,
            publisher: "MIT Press",
          },
        }}
      />
    );
    expect(container.textContent).toEqual(
      "[1] Harold Abelson, Gerald Jay Sussman, and Julie Sussman. 1985. Structure and Interpretation of Computer Programs. MIT Press."
    );
  });
});
