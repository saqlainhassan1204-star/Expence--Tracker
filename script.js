const money_plus = document.getElementById("income");
const money_minus = document.getElementById("expense");
const history = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

// Add Transaction
function addTransaction(e) {
    e.preventDefault();

    const transaction = {
        id: Date.now(),
        text: text.value,
        amount: +amount.value,
    };

    transactions.push(transaction);

    addTransactionDOM(transaction);
    updateValues();
    updateLocalStorage();

    text.value = "";
    amount.value = "";
}

// Add to DOM
function addTransactionDOM(transaction) {
    const sign = transaction.amount < 0 ? "-" : "+";

    const item = document.createElement("li");
    item.classList.add(transaction.amount < 0 ? "minus" : "plus");

    item.innerHTML = `
        ${transaction.text}
        <span>${sign}${Math.abs(transaction.amount)}</span>
        <button onclick="removeTransaction(${transaction.id})">x</button>
    `;

    history.appendChild(item);
}

// Update balance, income, expense
function updateValues() {
    const amounts = transactions.map(t => t.amount);

    const total = amounts
        .reduce((acc, item) => acc + item, 0)
        .toFixed(2);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => acc + item, 0)
        .toFixed(2);

    const expense = (
        amounts
            .filter(item => item < 0)
            .reduce((acc, item) => acc + item, 0) * -1
    ).toFixed(2);

    money_plus.innerText = `+${income}`;
    money_minus.innerText = `-${expense}`;
}

// Remove transaction
function removeTransaction(id) {
    transactions = transactions.filter(t => t.id !== id);
    updateLocalStorage();
    init();
}

// Save to localStorage
function updateLocalStorage() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

// Render app
function init() {
history.innerText = "";
    transactions.forEach(addTransactionDOM);
    updateValues();
}

init();

// Form submit
form.addEventListener("submit", addTransaction);