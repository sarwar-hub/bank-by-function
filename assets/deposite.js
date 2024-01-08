// Deposite




// Set Event to deposite button
document.getElementById('deposite-button').addEventListener('click', function(){
    // get input value using function getInputValue()
    let depositeAmount = getInputValue('deposite-amount');

    // Valid condition
    if(isNaN(depositeAmount)) {
        alert('Please input deposite amount');
        return;
    }

    // get previous deposite total using function getTextValue()
    let depositePrev = getTextValue('deposite-total');

    // get New deposite total 
    let depositeTotal = depositeAmount + depositePrev;

    // Set(update) new deposite total to Container using function setValue()
    setValue('deposite-total', depositeTotal);

    // Get previous balance total
    let balancePrev = getTextValue('balance-total');

    // get new Balance total
    let balanceTotal = balancePrev + depositeAmount;

    // Set(update) new balance total
    setValue('balance-total', balanceTotal);
})
