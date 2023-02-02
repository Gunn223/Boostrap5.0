const removeflex = document.getElementById('removeflex');
const centerimg = document.getElementById('centerimg');
const removemy = document.getElementById('removemy');
const dblock = document.getElementById("d-block");
// const imgskil = document.querySelectorAll("#d-block > a > img");



const layar = window.screen.width;

if(layar <= 375 ){
    removemy.classList.remove('my-3');
    removemy.classList.add('mx-3')
    removeflex.classList.remove('flex-column-reverse');
    removeflex.classList.add('mt-5')

    centerimg.classList.remove('mx-auto');
    centerimg.classList.add('w-100');

    dblock.classList.add('flex-column');
    dblock.classList.remove('justify-content-evenly');
    dblock.classList.add('text-center');

    // imgskil.classList.add('mt-5');
    
}