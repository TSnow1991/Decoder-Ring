// Write your tests here!

const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
     it("should return false if the substitution alphabet is missing", () => {
      const message = "message";
      const actual = substitution(message);
      const expected = false;
      expect(actual).to.equal(expected);
    });
    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
      const message = "message";
      const alphabet = "asdfjkl;qwerty";
      const actual = substitution(message, alphabet);
      const expected = false;
      expect(actual).to.equal(expected);
    });
    it("should return false if the substitution alphabet does not contain unique characters", () => {
      const message = "message";
      const alphabet = "asdfasdfasdfasdfasdfasdfas";
      const actual = substitution(message, alphabet)
      const expected = false;
      expect(actual).to.equal(expected);
    });
    it("should encode a message by using the given substitution alphabet", () => {
      const message = "message";
      const alphabet = "asdfghjklqwertyuiopzxcvbnm";
      const actual = substitution(message, alphabet);
      const expected = "ykrrpik";
      expect(actual).to.equal(expected);
    });
    it("should work with special characters while encoding", () => {
      const message = "message";
      const alphabet = "asdfjkl;qweruiop.,zxcvbnm:";
      const actual = substitution(message, alphabet);
      const expected = "ysii.rs";
      expect(actual).to.equal(expected);
    });
    it("should keep spaces while encoding", () => {
      const message = "my message";
      const alphabet = "asdfghjklqwertyuiopzxcvbnm";
      const actual = substitution(message, alphabet);
      const expected = "yp ysii.rs";
      expect(actual).to.equal(expected);
    });
    it("should decode a message by using the given substitution alphabet", () => {
      const message = "ykrrpik";
      const alphabet = "asdfghjklqwertyuiopzxcvbnm";
      const actual = substitution(message, alphabet, false);
      const expected = "message";
      expect(actual).to.equal(expected);
    });
    it("should work with special characters while decoding", () => {
      const message = "ysii.rs";
      const alphabet = "asdfjkl;qweruiop.,zxcvbnm:";
      const actual = substitution(message, alphabet, false);
      const expected = "message";
      expect(actual).to.equal(expected);
    });
    it("should keep spaces while decoding", () => {
      const message = "yp ysii.rs";
      const alphabet = ".asdfghjklqwertyuiopzxcvbnm";
      const actual = substitution(message, alphabet, false);
      const expected = "my message";
      expect(actual).to.equal(expected);
    });
  });