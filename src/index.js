function slugger(...words) {
  const newWord = "".concat(words).replaceAll(",", "-");
  return newWord;
}

export default slugger;
