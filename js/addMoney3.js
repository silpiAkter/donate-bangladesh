document.getElementById('donate-btn3').addEventListener('click', function(event){
    event.preventDefault();
    
    const inputField = getInputFieldById('input-field3');
    const mainBalance2 = getTextFieldById('account-balance');
    const title = getDonateTitle('donate-title3');
    
        const addMoney = getTextFieldById('add-money3');
        const addDonate = addMoney + inputField;

        if(isNaN(inputField)){
            alert('Invalid Input');
            return;
        }

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

const modalNoTree = document.getElementById('my_modal_3')
document.getElementById('donate-btn3').addEventListener('click', function(){
    modalNoTree.showModal();
})

document.getElementById('donate-btn3').addEventListener('click', function(event){
    event.preventDefault();

    const mainBalance = getInputFieldById('input-field3');
    
        const balance  = getTextFieldById('account-balance');
        const newBalance = balance - mainBalance;

        if(balance <= mainBalance){
            alert('You have not sufficient balance in your account');
            return;
        }

        document.getElementById('account-balance').innerText = newBalance;
        

})

