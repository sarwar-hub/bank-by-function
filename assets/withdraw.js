// withdraw




// Set Event to withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){
    // get input value using function getInputValue()
    let withdrawAmount = getInputValue('withdraw-amount');

    // Valid condition
    if(isNaN(withdrawAmount)) {
        alert('Please input withdraw amount');
        return;
    }

    // get previous withdraw total using function getTextValue()
    let withdrawPrev = getTextValue('withdraw-total');

/*  // get New withdraw total 
    let withdrawTotal = withdrawAmount + withdrawPrev;

    // Set(update) new withdraw total to Container using function setValue()
    setValue('withdraw-total', withdrawTotal); */ // the code is under valid condition to fix unconditional value addition to withdraw amount

    // Get previous balance total
    let balancePrev = getTextValue('balance-total');

    // Valid condition
    if (withdrawAmount > balancePrev) {
        alert('Insufficient balance');
        return;
    }



    // get New withdraw total 
    let withdrawTotal = withdrawAmount + withdrawPrev;

    // Set(update) new withdraw total to Container using function setValue()
    setValue('withdraw-total', withdrawTotal);



    // get new Balance total
    let balanceTotal = balancePrev - withdrawAmount;

    // Set(update) new balance total
    setValue('balance-total', balanceTotal);
})
