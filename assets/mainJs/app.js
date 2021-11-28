let OpenBar = document.querySelector('.open-menu');
let closeBar = document.querySelector('.close-btn');
let listMobil = document.querySelector('.list-mobil')


OpenBar.addEventListener('click', () => {
  listMobil.classList.add('active')
})

closeBar.addEventListener('click', () => {
    listMobil.classList.remove('active')
})

let openModal = document.querySelector('.form-modal');
let formCLose = document.querySelector('.form-close');
let ilanBtn = document.querySelector("#ilan-btn");

ilanBtn.addEventListener('click', () => {
  openModal.classList.add('active')
  Blur.classList.add('active')
})

formCLose.addEventListener('click', () => {
  openModal.classList.remove('active')
  Blur.classList.remove('active')  
})

let Blur = document.querySelector('.blur');





