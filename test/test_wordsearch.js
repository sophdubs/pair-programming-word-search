const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });
  it("should return true if the word is present vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'S', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'O', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'P', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'H', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'I', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SOPHIE')

    assert.isTrue(result);
  });
  it("should return true if the word is backwards present horizontally", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'S', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'O', 'N', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'P', 'A', 'U', 'A', 'L'],
      ['H', 'B', 'R', 'E', 'G', 'M', 'A', 'N'],
      ['W', 'H', 'C', 'I', 'G', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'E', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'R', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'B', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'NAMGERB')

    assert.isTrue(result);
  });
  it("should return true if the word is backwards present vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'S', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'O', 'N', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'P', 'A', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'H', 'M', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'I', 'G', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'E', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'R', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'B', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'BREGMAN')

    assert.isTrue(result);
  });
});
