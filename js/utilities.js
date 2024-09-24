//common shared function here

function getInputFieldById(id){
    const inputField = document.getElementById(id).value;
    const inputeNuber = parseFloat(inputField)
    return inputeNuber;
}

function getTextFieldById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);

    return textNumber; 
}

function showSectionById(id){
    document.getElementById('donation-status').classList.add('hidden');
    document.getElementById('history-status').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

function setActiveBtn(id){
    document.getElementById('donation').classList.remove('active');
    document.getElementById('history').classList.remove('active');
    document.getElementById(id).classList.add('active')
}

function getDonateTitle(id){
    const title = document.getElementById(id).innerText;
    return title;
}

