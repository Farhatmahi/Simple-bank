document.getElementById("btn-deposit").addEventListener("click", function () {

      //take input from the input field and convert
      const depositField = document.getElementById("deposit-field");
      const newDeposit = parseFloat(depositField.value);
      if(isNaN(newDeposit)){
            alert("Please enter a valid amount");
            return;
      }

      //take the previous deposit amount and convert
      const depositTotal = document.getElementById("depositTotal");
      const previousDeposit = parseFloat(depositTotal.innerText);

      //update deposit
      const currentDeposit = previousDeposit + newDeposit;
      depositTotal.innerText = currentDeposit;
      depositField.value = "";

      // take the previous deposit amount and convert
      const balanceTotal = document.getElementById("balanceTotal");
      previousBalance = parseFloat(balanceTotal.innerText);

      //update balance
      const currentBalance = previousBalance + newDeposit;
      balanceTotal.innerText = currentBalance;
      
})
