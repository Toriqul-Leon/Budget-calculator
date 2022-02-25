// !Global
const totalIncome = document.getElementById("total-income");
const foodCost = document.getElementById("food-cost");
const rentCost = document.getElementById("rent-cost");
const clothCost = document.getElementById("clothes-cost");
const totalExpenses = document.getElementById("total-expenses");
const newBalance = document.getElementById("new-balance");
const savePercentage = document.getElementById("save-percentage");
const saveInput = document.getElementById("save-input");
const balanceRemain = document.getElementById("balance-remain");

// !Add all cost
function sumALlCost() {
  // !Total Expenses
  const foodCostInput = parseFloat(foodCost.value);
  const rentCostInput = parseFloat(rentCost.value);
  const clothCostInput = parseFloat(clothCost.value);
  const totalCost = foodCostInput + rentCostInput + clothCostInput;
  totalExpenses.innerText = totalCost;
  //  !Balance
  const incomeInput = parseFloat(totalIncome.value);
  const remainingBalance = incomeInput - totalCost;
  if (remainingBalance > 0) {
    newBalance.innerText = remainingBalance;
    saveInput.disabled = false;
    document.getElementById("expense-exceed").classList.add("d-none");
    document.getElementById("already-exceeded").classList.add("d-none");
    newBalance.classList.remove("text-danger");
  } else {
    totalExpenses.innerText = "You can't expense more than your Income";
    saveInput.disabled = true;
    document.getElementById("expense-exceed").classList.remove("d-none");
    newBalance.classList.add("text-danger");
    newBalance.innerText = remainingBalance;
  }
  return remainingBalance;
}
// !End of Add cost

// !Saving Function
function saveAmount(balance) {
  const savePercent = parseFloat(saveInput.value);
  const incomeInput = parseFloat(totalIncome.value);
  if (balance > 0) {
    //   !Save Amount
    const percentage = savePercent / 100;
    const percent = percentage * incomeInput;
    savePercentage.innerText = Number(percent).toFixed(0);
    // !Remaining Balance
    const remainingBalanceAmount = balance - parseFloat(percent);
    if (percent <= balance) {
      balanceRemain.innerText = remainingBalanceAmount;
      document.getElementById("already-exceeded").classList.add("d-none");
      document.getElementById("balance-low").classList.add("d-none");
    } else {
      document.getElementById("balance-low").classList.remove("d-none");
      balanceRemain.innerText = Number(remainingBalanceAmount).toFixed(0);
    }
  } else {
    document.getElementById("already-exceeded").classList.toggle("d-none");
  }
}

// !Event
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  sumALlCost();
});

document.getElementById("save-button").addEventListener("click", function () {
  saveAmount(sumALlCost());
});

// !Reset Function
function resetField() {
  document
    .getElementById("reset-button")
    .addEventListener("click", function () {
      //   !Clearing input
      foodCost.value = "";
      rentCost.value = "";
      clothCost.value = "";
      totalIncome.value = "";
      totalExpenses.innerText = "0";
      newBalance.innerText = "0";
      balanceRemain.innerText = "0";
      savePercentage.innerText = "0";
      saveInput.value = "";
      document.getElementById("expense-exceed").classList.add("d-none");
      document.getElementById("balance-low").classList.add("d-none");
      saveInput.disabled = true;
      document.getElementById("save-button").disabled = true;
    });
}
resetField();

document
  .getElementById("calculate-button")
  .addEventListener("click", function () {
    balanceRemain.innerText = "0";
    savePercentage.innerText = "0";
    saveInput.value = "";
    document.getElementById("expense-exceed").classList.add("d-none");
    document.getElementById("balance-low").classList.add("d-none");
    saveInput.disabled = true;
    document.getElementById("save-button").disabled = true;
  });

// !Validation for Saving field and button
function manage(num) {
  var bt = document.getElementById("save-button");
  if (num.value == "") {
    bt.disabled = true;
  } else {
    bt.disabled = false;
  }
}
