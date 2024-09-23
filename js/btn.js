// console.log('btn color')

// const btnColor = document.querySelectorAll('.btn-bg');
//     btnColor.forEach(btnCol => {
//         btnCol.addEventListener('click', () => {
//             document.querySelector('.btnBg')?.classList.remove('btnBg')
//             btnCol.classList.add('btnBg')
//         })
//     })

const donationBtn = document.getElementById('donation');
const historyBtn = document.getElementById('history');

donationBtn.addEventListener('click',() => {
    setActiveBtn('donation');
})
historyBtn.addEventListener('click', () => {
    setActiveBtn('history');
})