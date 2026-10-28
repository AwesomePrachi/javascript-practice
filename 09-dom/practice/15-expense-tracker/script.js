"use strict";

// Store expenses in an array of objects.
let expenses = [];

// Select HTML elements.
const expenseForm = document.querySelector("#expenseForm");
const expenseNameInput = document.querySelector("#expenseName");
const expenseAmountInput = document.querySelector("#expenseAmount");

const expenseList = document.querySelector("#expenseList");
const totalAmount = document.querySelector("#totalAmount");
const summaryCount = document.querySelector("#summaryCount");
const expenseCount = document.querySelector("#expenseCount");

// Format amounts as Indian Rupees.
const currencyFormatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

// Add an expense when the form is submitted.
expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = expenseNameInput.value.trim();
    const amount = Number(expenseAmountInput.value);

    // Basic validation.
    if (
        name === "" ||
        !Number.isFinite(amount) ||
        amount <= 0 ||
        amount > 1000000000
    ) {
        return;
    }

    // Create an expense object.
    const expense = {
        id: crypto.randomUUID(),
        name: name,
        amount: Math.round(amount * 100) / 100
    };

    // Add the expense to the array.
    expenses.push(expense);

    // Clear the form.
    expenseForm.reset();
    expenseNameInput.focus();

    // Update the page.
    renderExpenses();
});

// Render the list and update the total.
function renderExpenses() {
    expenseList.replaceChildren();

    // Calculate the total using reduce().
    const total = expenses.reduce(function (sum, expense) {
        return sum + expense.amount;
    }, 0);

    totalAmount.textContent = currencyFormatter.format(total);

    // Update expense counts.
    summaryCount.textContent =
        `${expenses.length} ${expenses.length === 1 ? "item" : "items"}`;

    expenseCount.textContent =
        `${expenses.length} ${expenses.length === 1 ? "expense" : "expenses"}`;

    // Display the empty state.
    if (expenses.length === 0) {
        renderEmptyState();
        return;
    }

    // Create an element for every expense.
    expenses.forEach(function (expense) {
        const item = document.createElement("article");
        item.className = "expense-item";

        const icon = document.createElement("div");
        icon.className = "expense-icon";
        icon.setAttribute("aria-hidden", "true");
        icon.textContent = "↗";

        const details = document.createElement("div");
        details.className = "expense-details";

        const name = document.createElement("p");
        name.className = "expense-name";
        name.textContent = expense.name;

        details.appendChild(name);

        const right = document.createElement("div");
        right.className = "expense-right";

        const amount = document.createElement("p");
        amount.className = "expense-amount";
        amount.textContent = currencyFormatter.format(expense.amount);

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.type = "button";
        deleteButton.textContent = "×";
        deleteButton.setAttribute(
            "aria-label",
            `Delete expense ${expense.name}`
        );

        deleteButton.addEventListener("click", function () {
            deleteExpense(expense.id);
        });

        right.append(amount, deleteButton);
        item.append(icon, details, right);
        expenseList.appendChild(item);
    });
}

// Display a message when the list is empty.
function renderEmptyState() {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";

    const icon = document.createElement("div");
    icon.className = "empty-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = "↗";

    const title = document.createElement("p");
    title.className = "empty-title";
    title.textContent = "No expenses yet";

    const description = document.createElement("p");
    description.className = "empty-description";
    description.textContent =
        "Your expenses will appear here once you add them.";

    emptyState.append(icon, title, description);
    expenseList.appendChild(emptyState);
}

// Delete an expense and recalculate the total.
function deleteExpense(id) {
    expenses = expenses.filter(function (expense) {
        return expense.id !== id;
    });

    renderExpenses();
}

// Render the initial empty state.
renderExpenses();