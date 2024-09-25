document.getElementById('donate-btn2').addEventListener('click', function(event){
    event.preventDefault();
    
    const inputField = getInputFieldById('input-field2');
    const mainBalance2 = getTextFieldById('account-balance');
    const title = getDonateTitle('donate-title2');
    
        if(!isNaN(inputField) && inputField < 0 && mainBalance >= inputField){
            alert('Invalid Input');
            return;
        }

        if(inputField > mainBalance2){
            alert('insufiicient balance');
            return;
        }

        const addMoney = getTextFieldById('add-money2');
        const addDonate = addMoney + inputField;

        document.getElementById('add-money2').innerText = addDonate;
        

        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');

        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        const dateTimeString = `Date: ${day}/${month}/${year} Time: ${hours}-${minutes}-${seconds}`;
        

        const div = document.createElement('div');
        div.innerHTML = `
            <p>${inputField} Taka is donated for ${title}</p>
            <p>${dateTimeString}</p>`;
        div.style.border = '2px solid lightGray';
        div.style.padding = '20px';
        div.style.borderRadius = '10px';
        div.style.backgroundColor = 'white';
        div.style.marginBottom = '10px';
        console.log(div);
        document.getElementById('transaction-history').appendChild(div);

    

});

document.getElementById('donate-btn2').addEventListener('click', function(event){
    event.preventDefault();

    const mainBalance2 = getInputFieldById('input-field2');

        if(typeof mainBalance2 === 'number'){
            const balance  = getTextFieldById('account-balance');
            const newBalance = balance - mainBalance2;

            if(balance <= mainBalance2 ){
                alert('You have not sufficient balance in your account');
                return;
            }

            document.getElementById('account-balance').innerText = newBalance;
        }
        else{
            console.error('Invalid input values');
            return;
        }
               
})

const modal_2 = document.getElementById('my_modal_2');
const donateBtn_2 = document.getElementById('donate-btn2');
const donateInput_2 = document.getElementById('input-field2');
const mainBalances = getTextFieldById('account-balance');

donateBtn_2.addEventListener('click', function(){
    const donation = donateInput_2.value;
    if(isNaN(donation) || donation <= 0 || donation > mainBalances){
        alert('Please enter a valid donation amount')
    }
    else{
        modal.showModal();
    }
})

