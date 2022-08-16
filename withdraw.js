document.getElementById("btn-withdraw").addEventListener("click", function() {

      //take input from the input field and convert
      const withdrawField = document.getElementById("withdraw-field");
      const newWithdraw = parseFloat(withdrawField.value)

      if(isNaN(newWithdraw)){
            alert("Please enter a valid amount")
            withdrawField.value = "";
            return;
      }

      //take the previous withdraw amount and convert
      const withdrawTotal = document.getElementById("withdrawTotal");
      const previousWithdraw = parseFloat(withdrawTotal.innerText);


      // take the previous withdraw amount and convert
      const balanceTotal = document.getElementById("balanceTotal");
      previousBalance = parseFloat(balanceTotal.innerText);

      //update balance
      if(previousBalance - newWithdraw >= 0){
      const currentBalance = previousBalance - newWithdraw;
      balanceTotal.innerText = currentBalance;

      //update withdraw
      const currentWithdraw = previousWithdraw + newWithdraw;
      withdrawTotal.innerText = currentWithdraw;
      withdrawField.value = "";
      }
      else{
            alert("You don't have enough funds");
            withdrawField.value = "";
      }

})