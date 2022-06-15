const Util = (upperRef, lowerRef, numRef, symbolRef, pwdLength, setPwdMain) => {
  const upperArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerArr = "abcdefghoijklmnopqrstuvwxyz";
  const numArr = "0123456789";
  const symbolsArr = "{}[]+)*&%$#@!";

  const generateUpper = () => {
    return upperArr[Math.floor(Math.random() * upperArr.length)];
  };
  const generateLower = () => {
    return lowerArr[Math.floor(Math.random() * lowerArr.length)];
  };
  const generateNum = () => {
    return numArr[Math.floor(Math.random() * numArr.length)];
  };
  const generateSymbol = () => {
    return symbolsArr[Math.floor(Math.random() * symbolsArr.length)];
  };

  console.log(pwdLength);
  if (pwdLength === "" || pwdLength < 6 || pwdLength > 30) return;
  const upper = upperRef.current.checked;
  console.log("upper", upper);
  const lower = lowerRef.current.checked;
  const numberEl = numRef.current.checked;
  const symbol = symbolRef.current.checked;

  let password = "";

  const createMixed = () => {
    let randomMixed = [];
    randomMixed.push(generateUpper());
    randomMixed.push(generateLower());
    randomMixed.push(generateNum());
    randomMixed.push(generateSymbol());
    return randomMixed[Math.floor(Math.random() * randomMixed.length)];
  };

  const createRandomLetter = () => {
    let randomLetters = [];
    if (upper) {
      randomLetters.push(generateUpper());
      console.log("if upper", randomLetters);
    }
    if (lower) {
      randomLetters.push(generateLower());
    }
    if (numberEl) {
      randomLetters.push(generateNum());
    }
    if (symbol) {
      randomLetters.push(generateSymbol());
    }
    if (!symbol && !lower && !upper && !numberEl) {
      randomLetters.push(createMixed());
    }
    if (randomLetters.length === 0) return "";

    console.log("random length", randomLetters.length);
    return randomLetters[Math.floor(Math.random() * randomLetters.length)];
  };

  for (let i = 0; i < pwdLength; i++) {
    console.log("lenght is", pwdLength);
    //generate random letters
    let random = createRandomLetter();
    console.log("random", random);
    password += random;
  }
  console.log("pwd", password);
  setPwdMain(password);
};

export default Util;
