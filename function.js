function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldStringValue = inputField.value;
  const inputFieldValue = parseFloat(inputFieldStringValue);
  inputField.value = "";
  return inputFieldValue;
}

function getInnerText(elementId) {
  const text = document.getElementById(elementId);
  const textStringInnerText = text.innerText;
  const textInnerText = parseFloat(textStringInnerText);
  return textInnerText;
}

//set text value
function setText(id, newValue) {
  const textElement = document.getElementById(id);
  textElement.innerText = newValue;
}

function setter(id, newDeposit) {
      const previousTotal = getInnerText(id);
      const newTotal = previousTotal + newDeposit;
      setText(id, newTotal);
    }

document.getElementById("btn-deposit").addEventListener("click", () => {
  //get the new Deposit from input
  const newDeposit = getInputValue("deposit-field");
  if(isNaN(newDeposit)){
      alert("Please enter a valid amount");
      return;
  }
  setter("depositTotal", newDeposit);
  setter("balanceTotal", newDeposit);

});


document.getElementById("btn-withdraw").addEventListener("click", () => {
      const newWithdraw = getInputValue("withdraw-field");
      console.log(newWithdraw)
      if(isNaN(newWithdraw)){
            alert("Please enter a valid amount");
            return;
      }
      if(newWithdraw > getInnerText("balanceTotal")){
            alert("You don't have enough funds");
            return;
      }
      else{
            setter("withdrawTotal", newWithdraw);
      
            setter("balanceTotal", -newWithdraw);
      }
})



  // //the old deposit amount
  // const previousDepositTotal = getInnerText("depositTotal");

  // //new + previousDepositTotal
  // const newDepositTotal = newDeposit + previousDepositTotal;

  // //get the new Deposit
  // setText("depositTotal", newDepositTotal);

  // //get previous balance total
  // const previousBalance = getInnerText("balanceTotal");

  // const newBalanceTotal = previousBalance + newDepositTotal;

  // setText("balanceTotal", newBalanceTotal)