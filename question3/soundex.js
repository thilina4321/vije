const value1 = ["B", "F", "P", "V"];
const value2 = ["C", "G", "J", "K", "Q", "S", "X", "Z"];
const value3 = ["D", "T"];
const value4 = ["L"];
const value5 = ["M", "N"];
const value6 = ["R"];

const string = "Rubin";
let soundexCode = "";
const nameArr = string.split("");

const soundexFunc = () => {
  for (let letter = 0; letter < nameArr.length; letter++) {
    if (soundexCode.length === 4) {
      return soundexCode;
    }

    if (letter === 0) {
      soundexCode += nameArr[0];
    }

    if (
      letter === 0 ||
      ["a", "e", "i", "o", "u"].includes(nameArr[letter].toLowerCase())
    ) {
    } else {
      if (value1.includes(nameArr[letter].toUpperCase())) {
        if (!soundexCode.includes(1)) {
          soundexCode += 1;
        }
      } else if (value2.includes(nameArr[letter].toUpperCase())) {
        if (!soundexCode.includes(2)) {
          soundexCode += 2;
        }
      } else if (value3.includes(nameArr[letter].toUpperCase())) {
        if (!soundexCode.includes(3)) {
          soundexCode += 3;
        }
      } else if (value4.includes(nameArr[letter].toUpperCase())) {
        if (!soundexCode.includes(4)) {
          soundexCode += 4;
        }
      } else if (value5.includes(nameArr[letter].toUpperCase())) {
        if (!soundexCode.includes(5)) {
          console.log("yes");
          soundexCode += 5;
        }
      } else if (value6.includes(nameArr[letter].toUpperCase())) {
        if (!soundexCode.includes(6)) {
          soundexCode += 6;
        }
      }
    }
    if (nameArr.length - 1 === letter) {
      for (let i = 0; i < 3; i++) {
        if (soundexCode.length < 4) {
          soundexCode += 0;
        } else {
          return soundexCode;
        }
      }
    }
  }
};

console.log(soundexFunc());
