let totalBudget = 0;
let totalSpent = 0;

const budgetInput = document.getElementById("total-budget");
const budgetAmount = document.getElementById("budget-amount");
const spentAmount = document.getElementById("spent-amount");
const remainingAmount = document.getElementById("remaining-amount");

const trackerSection = document.getElementById("tracker-section");
const budgetSection = document.getElementById("budget-section");

function setBudget() {
  const value = parseFloat(budgetInput.value);
  if (value > 0) {
    totalBudget = value;
    budgetAmount.innerText = `₹${totalBudget}`;
    updateRemaining();
    trackerSection.classList.remove("hidden");
    budgetSection.classList.add("hidden");
  } else {
    alert("Please enter a valid amount.");
  }
}

function addExpense() {
  const name = document.getElementById("expense-name").value.trim();
  const amount = parseFloat(document.getElementById("expense-amount").value);

  if (!name || isNaN(amount) || amount <= 0) {
    alert("Please enter valid expense details.");
    return;
  }

  if (totalSpent + amount > totalBudget) {
    alert("You don't have enough balance for this expense.");
    return;
  }

  const expenseList = document.getElementById("expense-list");
  const li = document.createElement("li");
  li.innerHTML = `
    ${name} <strong>₹${amount}</strong>
  `;
  expenseList.appendChild(li);

  totalSpent += amount;
  spentAmount.innerText = `₹${totalSpent}`;
  updateRemaining();

  // Clear inputs
  document.getElementById("expense-name").value = '';
  document.getElementById("expense-amount").value = '';
}

function updateRemaining() {
  const remaining = totalBudget - totalSpent;
  remainingAmount.innerText = `₹${remaining}`;
}
