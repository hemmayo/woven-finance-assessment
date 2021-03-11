import { hasWord } from "./has-word";

const words = ["jump", "into", "the", "container"];
describe("hasWord", () => {
  it("should return true if words contain jump and container", () => {
    expect(hasWord("jump", words)).toBeTruthy();
    expect(hasWord("container", words)).toBeTruthy();
  });

  it("should return false if words doesn't contain certain words", () => {
    expect(hasWord("hello", words)).toBeFalsy();
    expect(hasWord("there", words)).toBeFalsy();
  });
});
