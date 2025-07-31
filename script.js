
const buttons = document.querySelector(".elements");

const items = buttons.querySelectorAll("p");

items[0].onclick = function (){
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
}
