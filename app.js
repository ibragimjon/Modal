const showBtn = document.querySelector('.show-btn')
const closeBtn = document.querySelector('.close-btn')
const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.modal')

showBtn.addEventListener('click', () =>{
   modal.classList.remove('hidden')
   overlay.classList.remove('hidden')
})

closeBtn.addEventListener('click', () =>{
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
 }) 

 overlay.addEventListener('click', () =>{
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
 })

document.addEventListener('keydown', (e) => {
    if(e.code === 'Escape'){
        modal.classList.add('hidden')
        overlay.classList.add('hidden')
    }
})