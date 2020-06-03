const wordSearch = (letters, word) => {
    return (checkHorizontal(letters, word) || checkVertical(letters, word) || checkBackwards(letters, word));
}

const checkHorizontal = function (letters, word) {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    return false;
};

const checkVertical = function (letters, word) {
    let transposed = transpose(letters);
    return checkHorizontal(transposed, word);
};

const checkBackwards = function (letters, word) {
    let reversed = word.split('').reverse().join('');
    return (checkHorizontal(letters, reversed) || checkVertical(letters, reversed))
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