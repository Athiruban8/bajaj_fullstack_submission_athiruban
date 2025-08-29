function processData(data) {
  try {
    const oddNumbers = [];
    const evenNumbers = [];
    const alphabets = [];
    const specialCharacters = [];
    let sum = 0;
    let allAlphabets = "";

    data.forEach((item) => {
      const strItem = String(item);

      if (!isNaN(strItem) && strItem.trim() !== "") {
        const num = parseInt(strItem);
        sum += num;

        if (num % 2 === 0) {
          evenNumbers.push(strItem);
        } else {
          oddNumbers.push(strItem);
        }
      } else if (/^[a-zA-Z]+$/.test(strItem)) {
        alphabets.push(strItem.toUpperCase());
        allAlphabets += strItem;
      } else if (/^[^a-zA-Z0-9\s]+$/.test(strItem)) {
        specialCharacters.push(strItem);
      }
    });
    const concatString = generateAlternatingCapsString(allAlphabets);

    return {
      oddNumbers,
      evenNumbers,
      alphabets,
      specialCharacters,
      sum: String(sum),
      concatString,
    };
  } catch (error) {
    throw new Error(`Error processing data: ${error.message}`);
  }
}

function generateAlternatingCapsString(input) {
  if (!input) return "";

  const reversed = input.split("").reverse().join("");
  let result = "";

  for (let i = 0; i < reversed.length; i++) {
    if (i % 2 === 0) {
      result += reversed[i].toUpperCase();
    } else {
      result += reversed[i].toLowerCase();
    }
  }

  return result;
}

module.exports = {
  processData,
};
