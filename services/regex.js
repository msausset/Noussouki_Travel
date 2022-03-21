class ValidatePhone {
  Validation(inputText) {
    const phoneFormat = [0 - 9];

    if (phoneFormat.test(inputText)) {
      alert("coucou");
    } else {
      alert("bye");
    }
  }
}

const phoneOK = new ValidatePhone();
export default phoneOK;
