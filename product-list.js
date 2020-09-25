window.onscroll = function() {
    var top1 = window.scrollY;
    console.log(top1)
    if(top1>=300){
        document.querySelector('.gototop').classList.add('top');
    }
    else{
        document.querySelector('.gototop').classList.remove('top');
    }
}

const tab1=document.querySelector('.tab1')
const tab2=document.querySelector('.tab2')
const tab3=document.querySelector('.tab3')
const tab4=document.querySelector('.tab4')
const tab5=document.querySelector('.tab5')
const tab6=document.querySelector('.tab6')
const tab7=document.querySelector('.tab7')

function tab1_click(){
    tab1.style.background="rgb(255, 79, 108)"
    tab2.style.background="rgba(255, 79, 108, 0.4)"
    tab3.style.background="rgba(255, 79, 108, 0.4)"
    tab4.style.background="rgba(255, 79, 108, 0.4)"
    tab5.style.background="rgba(255, 79, 108, 0.4)"
    tab6.style.background="rgba(255, 79, 108, 0.4)"
    tab7.style.background="rgba(255, 79, 108, 0.4)"
}
function tab2_click(){
    tab1.style.background="rgba(255, 79, 108, 0.4)"
    tab2.style.background="rgb(255, 79, 108)"
    tab3.style.background="rgba(255, 79, 108, 0.4)"
    tab4.style.background="rgba(255, 79, 108, 0.4)"
    tab5.style.background="rgba(255, 79, 108, 0.4)"
    tab6.style.background="rgba(255, 79, 108, 0.4)"
    tab7.style.background="rgba(255, 79, 108, 0.4)"
}
function tab3_click(){
    tab1.style.background="rgba(255, 79, 108, 0.4)"
    tab2.style.background="rgba(255, 79, 108, 0.4)"
    tab3.style.background="rgb(255, 79, 108)"
    tab4.style.background="rgba(255, 79, 108, 0.4)"
    tab5.style.background="rgba(255, 79, 108, 0.4)"
    tab6.style.background="rgba(255, 79, 108, 0.4)"
    tab7.style.background="rgba(255, 79, 108, 0.4)"
}
function tab4_click(){
    tab1.style.background="rgba(255, 79, 108, 0.4)"
    tab2.style.background="rgba(255, 79, 108, 0.4)"
    tab3.style.background="rgba(255, 79, 108, 0.4)"
    tab4.style.background="rgb(255, 79, 108)"
    tab5.style.background="rgba(255, 79, 108, 0.4)"
    tab6.style.background="rgba(255, 79, 108, 0.4)"
    tab7.style.background="rgba(255, 79, 108, 0.4)"
}
function tab5_click(){
    tab1.style.background="rgba(255, 79, 108, 0.4)"
    tab2.style.background="rgba(255, 79, 108, 0.4)"
    tab3.style.background="rgba(255, 79, 108, 0.4)"
    tab4.style.background="rgba(255, 79, 108, 0.4)"
    tab5.style.background="rgb(255, 79, 108)"
    tab6.style.background="rgba(255, 79, 108, 0.4)"
    tab7.style.background="rgba(255, 79, 108, 0.4)"
}
function tab6_click(){
    tab1.style.background="rgba(255, 79, 108, 0.4)"
    tab2.style.background="rgba(255, 79, 108, 0.4)"
    tab3.style.background="rgba(255, 79, 108, 0.4)"
    tab4.style.background="rgba(255, 79, 108, 0.4)"
    tab5.style.background="rgba(255, 79, 108, 0.4)"
    tab6.style.background="rgb(255, 79, 108)"
    tab7.style.background="rgba(255, 79, 108, 0.4)"
}
function tab7_click(){
    tab1.style.background="rgba(255, 79, 108, 0.4)"
    tab2.style.background="rgba(255, 79, 108, 0.4)"
    tab3.style.background="rgba(255, 79, 108, 0.4)"
    tab4.style.background="rgba(255, 79, 108, 0.4)"
    tab5.style.background="rgba(255, 79, 108, 0.4)"
    tab6.style.background="rgba(255, 79, 108, 0.4)"
    tab7.style.background="rgb(255, 79, 108)"
}
