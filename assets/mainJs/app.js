let OpenBar = document.querySelector('.open-menu');
let closeBar = document.querySelector('.close-btn');
let listMobil = document.querySelector('.list-mobil')

OpenBar.addEventListener('click', () => {
  listMobil.classList.add('active')
})

closeBar.addEventListener('click', () => {
    listMobil.classList.remove('active')
})