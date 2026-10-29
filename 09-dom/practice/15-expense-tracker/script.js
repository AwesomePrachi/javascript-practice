"use strict";

// ---------- Select HTML Elements ----------

const expenseForm = document.querySelector("#expenseForm");
const expenseNameInput = document.querySelector("#expenseName");
const expenseAmountInput = document.querySelector("#expenseAmount");

const expenseList = document.querySelector("#expenseList");
const totalAmount = document.querySelector("#totalAmount");
const summaryCount = document.querySelector("#summaryCount");
const expenseCount = document.querySelector("#expenseCount");

const nameError = document.querySelector("#nameError");
const amountError = document.querySelector("#amountError");
const formMessage = document.querySelector("#formMessage");

// ---------- Expense Data ----------

// Amounts are stored as integer paise to avoid common
// floating-point errors when adding currency amounts.
let expenses = [];

const MAX_AMOUNT = 1_000_000_000;

// Format values as Indian Rupees.
const currencyFormatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

// ---------- Validation Helpers ----------

function showFieldError(input, errorElement, message) {
    input.setAttribute("aria-invalid", "true");
    errorElement.textContent = message;
    errorElement.hidden = false;
}

function clearFieldError(input, errorElement) {
    input.removeAttribute("aria-invalid");
    errorElement.textContent = "";
    errorElement.hidden = true;
}

function clearFormFeedback() {
    clearFieldError(expenseNameInput, nameError);
    clearFieldError(expenseAmountInput, amountError);

    formMessage.textContent = "";
    formMessage.className = "form-message";
}

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
}

// ---------- Add an Expense ----------

expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    clearFormFeedback();

    const name = expenseNameInput.value.trim();
    const amountValue = expenseAmountInput.value.trim();
    const amount = Number(amountValue);

    let isValid = true;

    // Validate the expense name.
    if (name === "") {
        showFieldError(
            expenseNameInput,
            nameError,
            "Please enter an expense name."
        );

        isValid = false;
    }

    // Validate the amount.
    if (amountValue === "" || !Number.isFinite(amount)) {
        showFieldError(
            expenseAmountInput,
            amountError,
            "Please enter a valid amount."
        );

        isValid = false;
    } else if (amount <= 0) {
        showFieldError(
            expenseAmountInput,
            amountError,
            "Amount must be greater than zero."
        );

        isValid = false;
    } else if (amount > MAX_AMOUNT) {
        showFieldError(
            expenseAmountInput,
            amountError,
            "Amount cannot exceed ₹1,000,000,000."
        );

        isValid = false;
    } else if (
        Math.abs(amount * 100 - Math.round(amount * 100)) > 1e-7
    ) {
        showFieldError(
            expenseAmountInput,
            amountError,
            "Please enter no more than two decimal places."
        );

        isValid = false;
    }

    // Stop if any validation check fails.
    if (!isValid) {
        showFormMessage(
            "Please correct the highlighted fields.",
            "error"
        );

        return;
    }

    // Convert rupees to integer paise.
    const amountInPaise = Math.round(amount * 100);

    // Create a unique ID for this expense.
    const id = typeof crypto.randomUUID === "function"
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

    // Create the expense object.
    const expense = {
        id: id,
        name: name,
        amount: amountInPaise
    };

    // Add the expense to the array.
    expenses.push(expense);

    // Reset the form after a successful addition.
    expenseForm.reset();

    // Update the expense list and total.
    renderExpenses();

    showFormMessage(
        "Expense added successfully.",
        "success"
    );

    expenseNameInput.focus();
});

// ---------- Render Expenses ----------

function renderExpenses() {
    // Remove the previously rendered list.
    expenseList.replaceChildren();

    // Calculate the total in paise using reduce().
    const totalInPaise = expenses.reduce(function (sum, expense) {
        return sum + expense.amount;
    }, 0);

    // Convert paise to rupees for display.
    totalAmount.textContent = currencyFormatter.format(
        totalInPaise / 100
    );

    // Update expense counts.
    summaryCount.textContent =
        `${expenses.length} ${expenses.length === 1 ? "item" : "items"}`;

    expenseCount.textContent =
        `${expenses.length} ${expenses.length === 1 ? "expense" : "expenses"}`;

    // Show an empty state when there are no expenses.
    if (expenses.length === 0) {
        renderEmptyState();
        return;
    }

    // Create a list item for every expense.
    expenses.forEach(function (expense) {
        const item = document.createElement("article");
        item.className = "expense-item";

        // Expense icon.
        const icon = document.createElement("div");
        icon.className = "expense-icon";
        icon.setAttribute("aria-hidden", "true");
        icon.textContent = "↗";

        // Expense name.
        const details = document.createElement("div");
        details.className = "expense-details";

        const name = document.createElement("p");
        name.className = "expense-name";
        name.textContent = expense.name;

        details.appendChild(name);

        // Amount and delete button.
        const right = document.createElement("div");
        right.className = "expense-right";

        const amount = document.createElement("p");
        amount.className = "expense-amount";
        amount.textContent = currencyFormatter.format(
            expense.amount / 100
        );

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.type = "button";
        deleteButton.textContent = "×";

        deleteButton.setAttribute(
            "aria-label",
            `Delete expense ${expense.name}`
        );

        // Delete this specific expense when clicked.
        deleteButton.addEventListener("click", function () {
            deleteExpense(expense.id);
        });

        right.append(amount, deleteButton);
        item.append(icon, details, right);

        expenseList.appendChild(item);
    });
}

// ---------- Render the Empty State ----------

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

// ---------- Delete an Expense ----------

function deleteExpense(id) {
    // Keep all expenses except the selected one.
    expenses = expenses.filter(function (expense) {
        return expense.id !== id;
    });

    // Refresh the list, total, and counts.
    renderExpenses();

    showFormMessage(
        "Expense deleted successfully.",
        "success"
    );
}

// ---------- Clear Errors While Editing ----------

expenseNameInput.addEventListener("input", function () {
    clearFieldError(expenseNameInput, nameError);
});

expenseAmountInput.addEventListener("input", function () {
    clearFieldError(expenseAmountInput, amountError);
});

// ---------- Initial Render ----------

renderExpenses();