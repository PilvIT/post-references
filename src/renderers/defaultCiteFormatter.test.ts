import { defaultCiteFormatter } from "./defaultCiteFormatter";
import { BookCite } from "../types";

const data: BookCite = {
  type: "book",
  title: "Concrete Mathematics",
  authors: ["Donald E. Knuth", "Oren Patashnik", "Ronald Graham"],
  publisher: "Addison–Wesley",
  year: 1994,
};

describe("defaultCiteFormatter", function () {
  it("should return plain id", () => {
    const result = defaultCiteFormatter("1", data);
    expect(result).toEqual("[1]");
  });

  it("should include meta string", () => {
    const result = defaultCiteFormatter("1", data, "p. 20–30");
    expect(result).toEqual("[1, p. 20–30]");
  });
});
