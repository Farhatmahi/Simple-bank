document.getElementById("btn-withdraw").addEventListener("click", () => {
  const newWithdraw = getInputValue("withdraw-field");
  console.log(newWithdraw);
  if (isNaN(newWithdraw)) {
    alert("Please enter a valid amount");
    return;
  }
  if (newWithdraw > getInnerText("balanceTotal")) {
    alert("You don't have enough funds");
    return;
  } else {
    setter("withdrawTotal", newWithdraw);
    setter("balanceTotal", -newWithdraw);
  }
});
