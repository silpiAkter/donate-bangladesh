
const donationBtn = document.getElementById('donation');
const historyBtn = document.getElementById('history');

donationBtn.addEventListener('click',() => {
    setActiveBtn('donation');
})
historyBtn.addEventListener('click', () => {
    setActiveBtn('history');
})