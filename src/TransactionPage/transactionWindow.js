
// Create a transaction window element
const transactionWindow = document.createElement('div');
transactionWindow.classList.add('transaction-window');

// Create input fields for card number, 3 digits, and expiration date
const cardNumberInput = document.createElement('input');
cardNumberInput.type = 'text';
cardNumberInput.placeholder = 'Card Number';

const threeDigitsInput = document.createElement('input');
threeDigitsInput.type = 'text';
threeDigitsInput.placeholder = '3 Digits';

const expirationDateInput = document.createElement('input');
expirationDateInput.type = 'text';
expirationDateInput.placeholder = 'Expiration Date';

// Append input fields to the transaction window
transactionWindow.appendChild(cardNumberInput);
transactionWindow.appendChild(threeDigitsInput);
transactionWindow.appendChild(expirationDateInput);

// Append the transaction window to the document body
document.body.appendChild(transactionWindow);
