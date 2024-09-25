document.getElementById('donate-btn3').addEventListener('click', function(event){
    event.preventDefault();
    
    const inputField = getInputFieldById('input-field3');
    const mainBalance3 = getTextFieldById('account-balance');
    const title = getDonateTitle('donate-title3');
    
        if(isNaN(inputField) || inputField <= 0){
            alert('Invalid Input');
            return;
        }

        if(inputField > mainBalance3){
            alert('insufiicient balance');
            return;
        }

        const addMoney = getTextFieldById('add-money3');
        const addDonate = addMoney + inputField;
        
        document.getElementById('add-money3').innerText = addDonate;


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
        div.style.backgroundColor = 'white';
        div.style.border = '2px solid lightGray';
        div.style.padding = '20px';
        div.style.borderRadius = '10px';
        div.style.backgroundColor = 'white';
        div.style.marginBottom = '10px';
        console.log(div);
        document.getElementById('transaction-history').appendChild(div);

})


document.getElementById('donate-btn3').addEventListener('click', function(event){
    event.preventDefault();

    const mainBalance3 = getInputFieldById('input-field3');

        if(typeof mainBalance3 === 'number'){
            const balance  = getTextFieldById('account-balance');
            const newBalance = balance - mainBalance3;

            if(balance <= mainBalance3){
                alert('You have not sufficient balance in your account');
                return;
            }

            document.getElementById('account-balance').innerText = newBalance;
        }
        else{
            return;
        }
        
})

const modal_3 = document.getElementById('my_modal_3');
const donateBtn_3 = document.getElementById('donate-btn3');
const donateInput_3 = document.getElementById('input-field3');
const mainBalanc = getTextFieldById('account-balance');

donateBtn_3.addEventListener('click', function(){
    const donation = donateInput_3.value;
    if(isNaN(donation) || donation <= 0 || donation >= mainBalance){
        alert('Please enter a valid donation amount');

    }
    else{
        modal.showModal();
    }
})

