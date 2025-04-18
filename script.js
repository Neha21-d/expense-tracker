// script.js
let totalExpenses = 0;

document.getElementById('expense-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (description === '' || isNaN(amount)) {
        alert('Please enter valid expense details!');
        return;
    }

    addExpense(description, amount);
    updateTotalExpenses(amount);
    clearForm();
});

function addExpense(description, amount) {
    const expenseList = document.getElementById('expense-list');
    const li = document.createElement('li');
    li.textContent = `${description}: $${amount.toFixed(2)}`;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        expenseList.removeChild(li);
        updateTotalExpenses(-amount); // Subtract the amount from total
    });

    li.appendChild(deleteBtn);
    expenseList.appendChild(li);
}

function updateTotalExpenses(amount) {
    totalExpenses += amount;
    document.getElementById('total-expenses').textContent = totalExpenses.toFixed(2);
}

function clearForm() {
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
}