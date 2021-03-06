class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;

  }


  submitBudgetForm() {
    const value = this.budgetInput.value;

    console.log('test click');
    // VALIDTE VALUE ENTERED
    if (value === '' || value < 0) {
      this.budgetFeedback.classList.add('showItem');
      this.budgetFeedback.innerHTML = '<p> Value cannot be empty or negative';

      setTimeout(() => {
        this.budgetFeedback.classList.remove('showItem');
      }, 3000);

    }
    else {

      this.budgetAmount.textContent = value;
      this.budgetInput.value = '';
      this.showBalence();
    }

  }

  showBalence() {
    const expense = this.totalExpense();
    const total = parseInt(this.budgetAmount.textContent) - expense;
    this.balanceAmount.textContent = total;

    if (total < 0) {
      this.balance.classList.remove('showGreen', 'showBlack');
      this.balance.classList.add('showRed');
    }
  }

  totalExpense() {
    let total = 400;
    return total;
  }

}

function eventeListeners() {
  const budgetForm = document.getElementById('budget-form');
  const expenseForm = document.getElementById('expense-form');
  const expenseList = document.getElementById('expense-list');

  // INSTANCE OF UI CLASS
  const ui = new UI();

  budgetForm.addEventListener('submit', (e) => {
    e.preventDefault();
    ui.submitBudgetForm();
  });

  expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  expenseList.addEventListener('click', (e) => {
    e.preventDefault();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  eventeListeners();
})
