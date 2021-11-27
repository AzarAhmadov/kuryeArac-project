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
let Body = document.querySelector('#body');

ilanBtn.addEventListener('click', () => {
  openModal.classList.add('active')
  Body.classList.add('active')
})

formCLose.addEventListener('click', () => {
  openModal.classList.remove('active')
})