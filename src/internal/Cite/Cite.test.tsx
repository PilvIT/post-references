import * as rtl from "@testing-library/react";
import { Cite } from "./Cite";
import { CiteContextProvider } from "../CiteContext/CiteContextProvider";
import { Bibliography } from "../Bibliography/Bibliography";
import { DefaultRenderer } from "../../renderers/DefaultRenderer";

describe("<Cite />", () => {
  it("should render id from context", async () => {
    rtl.render(
      <CiteContextProvider BibItemRenderer={DefaultRenderer}>
        <p>
          Test is described by <Cite id="tex" />.
        </p>
        <h2>References</h2>
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
      </CiteContextProvider>
    );

    await rtl.screen.findByRole("link", {
      name: "[1]",
    });
    const element = rtl.screen.getByText(/Test is described by.*/);
    expect(element.textContent).toEqual("Test is described by [1].");
  });

  it.todo("should render page numbers");
});
