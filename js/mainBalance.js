document.getElementById('donate-btn1').addEventListener('click', function(event){
    event.preventDefault();

    const mainBalance = getInputFieldById('input-field1');

    if(mainBalance) {
        const balance  = getTextFieldById('account-balance');
        const newBalance = balance - mainBalance;

        document.getElementById('account-balance').innerText = newBalance;
        
    }
    else{
        alert('You have not enough balance at this moment, please try later');
    }

})