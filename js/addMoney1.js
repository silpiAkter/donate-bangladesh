document.getElementById('donate-btn1').addEventListener('click', function(event){
    event.preventDefault();
    

    const inputField = getInputFieldById('input-field1');
    
    if(inputField === 'number' || inputField > 0){

        const addMoney = getTextFieldById('add-money1');
        const addDonate = addMoney + inputField;

        document.getElementById('add-money1').innerText = addDonate;

        const add = document.createElement('p');
        add.innerText = `
        added ${inputField} TK. Balance: ${addDonate}`;
        console.log(add);

        document.getElementById('donation-add').appendChild(add);

        const p = document.createElement('p');
        p.innerText = `
        added ${inputField} TK. Balance: ${addDonate}`;
        console.log(p)

        document.getElementById('transaction-history').appendChild(p);
    }
    else{
        alert('Please add a valid amount');
    }

})