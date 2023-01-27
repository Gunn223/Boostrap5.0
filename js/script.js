const removeflex = document.getElementById('removeflex');
const centerimg = document.getElementById('centerimg');



const layar = window.screen.width;

if(layar <= 375 ){

    removeflex.classList.remove('flex-column-reverse');
    centerimg.classList.remove('mx-auto');
    centerimg.classList.add('w-100');

}else{
    alert('gagal');
}