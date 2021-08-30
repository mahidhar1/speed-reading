const sentences = [
  "To be or not to be is the question",
  "Trust not the world forget not the God fear not the Death",
];

const shuffle = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

const getRandomWords = () => {
  const sentence = sentences[Math.floor(sentences.length * Math.random())];
  const words = sentence.split(" ");
  const mainWord = words[Math.floor(words.length * Math.random())];
  let identical = Math.random() > 0.5 ? true : false;
  let question, answer;
  if (identical) {
    question = [mainWord, mainWord, mainWord];
    answer = true;
  } else {
    let allChars = "abcdefghijklmnopqrstuvwxyz";
    allChars += allChars.toUpperCase();
    let randomChar = allChars[Math.floor(allChars.length * Math.random())];
    const corruptedWord = mainWord.replace(
      mainWord[Math.floor(mainWord.length * Math.random())],
      randomChar
    );
    question = shuffle([corruptedWord, mainWord, mainWord]);
    answer = false;
  }
  return { question, answer };
};

export { getRandomWords, shuffle };
