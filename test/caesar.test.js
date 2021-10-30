// Write your tests here!
const {caesar} = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
  it("should return false if the shift is undefined or empty", () => {
    let input = "words";
    let shift = undefined;
    let actual = caesar(input, shift, (encode = true));
    let expected = false;
    expect(actual).to.equal(expected);
  });
  it("should return false if the shift is greater than 25", () => {
    let input = "words";
    let shift = 26;
    let actual = caesar(input, shift, (encode = true));
    let expected = false;
    expect(actual).to.equal(expected);
  });
  it("should return false if the shift is less than -25", () => {
    let input = "words";
    let shift = -26;
    let actual = caesar(input, shift, (encode = true));
    let expected = false;
    expect(actual).to.equal(expected);
  });
  it("should return false if the shift is 0", () => {
    let input = "words";
    let shift = 0;
    let actual = caesar(input, shift, (encode = true));
    let expected = false;
    expect(actual).to.equal(expected);
  });
  it("should invert shift if encode is false to decode", () => {
      let input = "gvmmt";
      let shift = -5;
      let actual = caesar(input, shift, false);
      let expected = "larry";
      expect(actual).to.equal(expected);
  });
  it("should change capital letters to lower case", () => {
    let input = "CAPS";
    let shift = 16;
    let actual = caesar(input, shift, (encode = true));
    let expected = "sqfi";
    expect(actual).to.equal(expected);
  });
  it("should keep spaces and non-alphabet characters", () => {
    let input = "there are 3 spaces!";
    let shift = 10;
    let actual = caesar(input, shift, (encode = true));
    let expected = "drobo kbo 3 czkmoc!";
    expect(actual).to.equal(expected);
  });
  it("should wrap around to the front of the alphabet", () => {
    let input = "z";
    let shift = 3;
    let actual = caesar(input, shift, (encode = true));
    let expected = "c";
    expect(actual).to.equal(expected);
  });
});