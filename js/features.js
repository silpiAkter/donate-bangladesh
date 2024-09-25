document.getElementById('donation').addEventListener('click', function(event){
    event.preventDefault();
    
    showSectionById('donation-status')
    
});

document.getElementById('history').addEventListener('click', function(){
    showSectionById('history-status');
})

// connect to history btn active 

const donationBtn = document.getElementById('donation');
const historyBtn = document.getElementById('history');

donationBtn.addEventListener('click',() => {
    setActiveBtn('donation');
})
historyBtn.addEventListener('click', () => {
    setActiveBtn('history');
})