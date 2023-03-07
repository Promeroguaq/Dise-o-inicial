const hamburguesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);

document.addEventListener('DOMContentLoaded',()=>{
    mostrarMenu();
    cerrarMenu();
});

function mostrarMenu(){
    hamburguesa.addEventListener('click',()=>{
      navegacion.classList.toggle('ocultar');  
      // navegacion.classList.toggle('ocultar');
    });
}

function cerrarMenu(){
  enlaces.forEach(enlace =>{
    enlace.addEventListener('click',(e)=>{
  
      if(e.target.tagName === 'A'){
        navegacion.classList.add('ocultar');
      }
    });
  });
}