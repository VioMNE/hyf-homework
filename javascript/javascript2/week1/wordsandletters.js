/// Find the shortest word
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function findShortestWord(list) {
  let shortestWord = list[0];
  for (let i = 0; i < list.length; i++) {
    if (shortestWord.length > list[i].length) {
      shortestWord = list[i];
    } else {
      continue;
    }
  }
  return shortestWord;
}

console.log(findShortestWord(danishWords)); /// output ø

//Find and count the Danish letters
const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";

function findDanishLetters(letters) {
  const danishLetters = {
    total: 0,
    å: 0,
    æ: 0,
    ø: 0,
  };

  for (let i = 0; i < letters.length; i++) {
    switch (letters[i]) {
      case "æ":
        danishLetters.æ += 1;
        danishLetters.total += 1;
        break;
      case "å":
        danishLetters.å += 1;
        danishLetters.total += 1;
        break;
      case "ø":
        danishLetters.ø += 1;
        danishLetters.total += 1;
        break;
      default:
        break;
    }
  }

  Object.keys(danishLetters).forEach(
    (l) => danishLetters[l] == 0 && delete danishLetters[l]
  );
  return danishLetters;
}

console.log(findDanishLetters(danishString)); /// output {total: 1, å: 1}
console.log(findDanishLetters(danishString2)); /// output {total: 4, å: 1, æ: 1, ø: 2}
