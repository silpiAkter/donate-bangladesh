document.getElementById('donation').addEventListener('click', function(event){
    event.preventDefault();
    
    showSectionById('donation-status')
    
});

document.getElementById('history').addEventListener('click', function(){
    showSectionById('history-status');
})