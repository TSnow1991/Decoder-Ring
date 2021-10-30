// Write your tests here!
const {polybius} = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
    it("should return false if input has odd number of values", () => {
      let input = "525 4515";
      let encode = false;
      let actual = polybius(input, encode);
      let expected = false;
      expect(actual).to.equal(expected);
    });
    it("should return message based on paired numbers", () => {
      let input = "554343";
      let encode = false;
      let actual = polybius(input, encode);
      let expected = zoo;
      expect(actual).to.equal(expected);
    });
    it("should maintain space", () => {
      let input = "this is space";
      let actual = polybius(input, encode);
      let expected = "44324232 4232 3253113151";
      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
      let input = "LOUD NOISES";
      let actual = polybius(input, encode);
      let expected = "13435441 334342345134";
      expect(actual).to.equal(expected);
    });
});