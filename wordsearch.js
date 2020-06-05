const wordSearch = (letters, word) => {
    return (checkHorizontal(letters, word) || checkVertical(letters, word) || checkBackwards(letters, word) || checkDiagonal(letters, word));
};

const checkHorizontal = function (letters, word) {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)){
            return true;
        }      
    }
    return false;
};

const checkVertical = function (letters, word) {
    let transposed = transpose(letters);
    return checkHorizontal(transposed, word);
};

const checkBackwards = function (letters, word) {
    let reversed = word.split('').reverse().join('');
    return (checkHorizontal(letters, reversed) || checkVertical(letters, reversed) || checkDiagonal(letters, reversed));
};

const checkDiagonal = function(letters, word) {
    let resultRight = false;
    let resultLeft = false;
    for (let i = 0; i < letters.length; i++) {
        if (letters[i].includes(word[0])) {
            for (let j = 0; j < letters[0].length; j++) {
                if (letters[i][j] === word[0]) {
                    if (i + word.length - 1 <= letters.length && j + word.length - 1 <= letters[0].length) {
                        resultRight = checkDiagonalRecursiveRight(letters, i, j, word);
                    }
                    if (i + word.length - 1 <= letters.length && j - word.length + 1 >= 0) {
                        resultLeft = checkDiagonalRecursiveLeft(letters, i, j, word);
                    }
                }
                if(resultRight || resultLeft) {
                    return true;
                }
            }
        }
    }
    return (resultRight || resultLeft);
};

const checkDiagonalRecursiveRight = function(letters, row, index, word) {
    if (word.length === 1) {
        return word === letters[row][index];
    } else if (letters[row][index] === word[0]) {
        return checkDiagonalRecursiveRight(letters, row + 1, index + 1, word.slice(1));
    }
    return false;
};

const checkDiagonalRecursiveLeft = function(letters, row, index, word) {
    if (word.length === 1) {
        return word === letters[row][index];
    } else if (letters[row][index] === word[0]) {
        return checkDiagonalRecursiveLeft(letters, row + 1, index - 1, word.slice(1));
    }
    return false;
};

const transpose = function (matrix) {
    const solutionArray = [];
    for (let i = 0; i < matrix[0].length; i++) {
        const subArray = [];
        for (let j = 0; j < matrix.length; j++) {
            subArray.push(matrix[j][i]);
        }
        solutionArray.push(subArray);
    }
    return solutionArray;
};

module.exports = wordSearch