import { renderPageNumbers } from "./renderPageNumbers";

describe("renderPageNumbers", () => {
  it("should render range", () => {
    expect(renderPageNumbers([1, 30])).toEqual("1–30");
  });

  it("should render single number", () => {
    expect(renderPageNumbers(21)).toEqual("21");
  });
});
