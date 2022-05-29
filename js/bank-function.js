// Get value from input field
function getInputValue(inputId){

    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    const inputResult = parseFloat(inputValue);
    inputField.value = ''; // Empty input value

    return inputResult;

};

// Update total deposit and withdraw
function updateTotalField(totalFieldId, inputAmount){

    const totalAmount = document.getElementById(totalFieldId);
    const totalAmountText = totalAmount.innerText;
    const previousTotalAmount  = parseFloat(totalAmountText);
    totalAmount.innerText = previousTotalAmount + inputAmount;

}

function getCurrentBalance(){
    const balanceAmount = document.getElementById('balance-total');
    const balanceAmountText = balanceAmount.innerText;
    const previousBalanceAmount = parseFloat(balanceAmountText);
    return previousBalanceAmount;
}

// Update total balance
function updateBalanceTotal(inputAmount, isAdd){
    const balanceAmount = document.getElementById('balance-total');
    const previousBalanceAmount = getCurrentBalance();

    if (isAdd == true){
        balanceAmount.innerText = previousBalanceAmount + inputAmount;
    }
    else{
        balanceAmount.innerText = previousBalanceAmount - inputAmount;
    }
}

// Get and update deposit
document.getElementById('deposit-submit').addEventListener('click', function(){
    
    const depositAmount = getInputValue('deposit-input');

    if (depositAmount > 0) {
        const updateTotalDeposit = updateTotalField('deposit-total', depositAmount);
        const balanceTotal = updateBalanceTotal(depositAmount, true);
    }
    
    else {
        alert ('Input valid value');
    }

})

// Get and update withdraw
document.getElementById('withdraw-submit').addEventListener('click', function(){

    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();

    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {

        const updateTotalWithdraw = updateTotalField('withdraw-total', withdrawAmount);
        const balanceTotal = updateBalanceTotal(withdrawAmount, false);
    }

    else if (withdrawAmount > currentBalance) {
        alert('Insufficient balance');
    }
    
    else {
        alert ('Input valid value');
    }

})

// logout bank.js interface
document.getElementById('logout-btn').addEventListener('click', function(){

    window.location.href = '../index.html';
    
})