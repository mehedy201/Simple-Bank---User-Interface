// Create Event handaler on deposite button
document.getElementById('deposit-button').addEventListener('click', function(){
    // Get input value in deposite
     const inputField = document.getElementById('deposit-input');
     const inputAmount = inputField.value;
     const inputAmountParse = parseFloat(inputAmount);
     inputField.value = '';
     // Pass input valu in deposite amount and add amount
     const depositeAmount = document.getElementById('deposite-money')
     const depositeAmountText = depositeAmount.innerText;
     const depositeAmountParse = parseFloat(depositeAmountText);
     const totalDepositeAmount = inputAmountParse + depositeAmountParse;
     depositeAmount.innerText = totalDepositeAmount;

     const currentBlance = document.getElementById('current-blance');
     const currentBlanceText = currentBlance.innerText;
     const currentBlanceParse = parseFloat(currentBlanceText);
     const updateBlance = currentBlanceParse + inputAmountParse;
     currentBlance.innerText = updateBlance;
});
// Creat Event handaler on withdraw Button
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawInputParse = parseFloat(withdrawInputText);
    withdrawInput.value = '';
    // pass withdraw input valu in withdraw amount 
    const withdrawAmount = document.getElementById('withdraw-money');
    const withdrawAmountText = withdrawAmount.innerText;
    const withdrawAmountParse = parseFloat(withdrawAmountText);
    const totalWithdrawAmount = withdrawAmountParse + withdrawInputParse;
    withdrawAmount.innerText = totalWithdrawAmount;

    const withdrawCurrentBlance = document.getElementById('current-blance');
    const withdrawCurrentBlanceText = withdrawCurrentBlance.innerText;
    const withdrawCurrentBlanceParse = parseFloat(withdrawCurrentBlanceText);
    const updateBlanceAfterWithdraw = withdrawCurrentBlanceParse - withdrawInputParse;
    withdrawCurrentBlance.innerText = updateBlanceAfterWithdraw;
});

