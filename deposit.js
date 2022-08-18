document.getElementById("btn-deposit").addEventListener("click", () => {
  //get the new Deposit from input
  const newDeposit = getInputValue("deposit-field");
  if (isNaN(newDeposit)) {
    alert("Please enter a valid amount");
    return;
  }
  setter("depositTotal", newDeposit);
  setter("balanceTotal", newDeposit);
});
