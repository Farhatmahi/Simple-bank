//this function will return the value of the input field
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldStringValue = inputField.value;
  const inputFieldValue = parseFloat(inputFieldStringValue);
  inputField.value = "";
  return inputFieldValue;
}

//this function will return the innerText of the elementId
function getInnerText(elementId) {
  const text = document.getElementById(elementId);
  const textStringInnerText = text.innerText;
  const textInnerText = parseFloat(textStringInnerText);
  return textInnerText;
}

//this function will set the text in the total
function setText(id, newValue) {
  const textElement = document.getElementById(id);
  textElement.innerText = newValue;
}

//this function will add the new amount to the total amount
function setter(id, newDeposit) {
  const previousTotal = getInnerText(id);
  const newTotal = previousTotal + newDeposit;
  setText(id, newTotal);
}
