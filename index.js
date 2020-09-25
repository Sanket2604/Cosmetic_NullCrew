const nav = document.querySelector('.navbar');
const topscroll = document.querySelector('.gototop');
const delivery = document.querySelector('.shipment');
window.onscroll = function() {
    var top = window.scrollY;
    if(top>=5){
        nav.style.marginTop="0px"
        delivery.style.height="0px"
    }
    else{
        nav.style.marginTop="30px"
        delivery.style.height="30px"
    }

    if(top>=300){
        topscroll.classList.add('top');
    }
    else{
        topscroll.classList.remove('top');
    }
}