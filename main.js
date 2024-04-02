const contenedor = document.querySelector('.imagenes');
const body = document.querySelector('body');

const galeria = document.querySelector('.galeriaCompleta');
let seccionPrincipal;
let imagenActive;
let imagenPrincipal;

let left;
let right;
let carrusel;


document.addEventListener('click',(e)=>{
    if(e.target.matches('.img_card')){
        body.classList.add('b_ocultar');
        seccionPrincipal=e.target.parentElement.nextElementSibling;
        seccionPrincipal.classList.add('ocultar');
        
        imagenPrincipal = seccionPrincipal.querySelector('.imgPrincipal');
        imagenActive =seccionPrincipal.querySelector('.active');

        carrusel = seccionPrincipal.querySelector('.imagenes');
        left = seccionPrincipal.querySelector('.bx-chevron-left');
        right = seccionPrincipal.querySelector('.bx-chevron-right');
    }
    if(e.target.matches('.bx-x')){
        body.classList.remove('b_ocultar');
        seccionPrincipal.classList.remove('ocultar');
    }
    if(e.target.matches('.section_img')){
        if(!(e.target===imagenActive)){
            imagenActive.classList.remove('active');
            e.target.classList.add('active');
            imagenActive = e.target;
            imagenPrincipal.src = e.target.src;
        }   
    }

    if(e.target===left){
        carrusel.scrollLeft -=200;
    }
    if(e.target===right){
        console.log(carrusel.scrollLeft);
        carrusel.scrollLeft += 200;
        console.log(carrusel.scrollLeft);
    }
    
});