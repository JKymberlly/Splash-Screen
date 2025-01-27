/*Configuraremos um evento ouvinte, como cliques na tela, teclas precionadas ou movimentos do mouse, nesse caso um reload da pagina*/


/* o evento DomContentLoaded, é disparado quando o html e os estilos estão completamente carregados mostrando assim os elementos da pagina*/
document.addEventListener("DOMContentLoaded", () => { 
 const splash = document.getElementById("splash");

 /*Setamos um tempo de tela para o splash aqui*/
 setTimeout(() => {
    splash.classList.add("hidden");
    document.body.classList.add("content-loaded");
 }, 2000);
});

if (performance.getEntriesByType('navigation')[0]?.type === 'reload') {
    window.location.href = '/'; // Redireciona para a página inicial apenas no reload
  }