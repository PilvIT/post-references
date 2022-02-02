import * as rtl from "@testing-library/react";
import { Bibliography } from "./Bibliography";
import { BibliographyData } from "../../types";

describe("<Bibliography />", () => {
  it("should sort by authors if multiple items exist", () => {
    const data: BibliographyData = {
      os: {
        type: "book",
        title: "Operating Systems: Design and Implementation",
        authors: ["Andrew S. Tanenbaum, Albert S. Woodhull"],
        year: 1987,
        publisher: "Pearson Education, Inc",
      },
      compilers: {
        type: "book",
        title: "Compilers: Principles, Techniques, and Tools",
        authors: [
          "Alfred V. Aho",
          "Monica S. Lam",
          "Ravi Sethi",
          "Jeffrey D. Ullman",
        ],
        year: 1986,
        publisher: "Pearson Education, Inc",
      },
    };
    const { container } = rtl.render(<Bibliography data={data} />);
    const compilers = container.querySelector("#cite-compilers");
    expect(compilers).toHaveTextContent(/\[1]Alfred.*/);
  });
});
