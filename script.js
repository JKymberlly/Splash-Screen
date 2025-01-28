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

/*(performance.getEntriesByType('navigation')[0] varifica como o usuario chegou até a página,*/

if (performance.getEntriesByType('navigation')[0]?.type === 'reload') { 
   /*?.type: - caso não exista informação, ele garante que o código não quebre*/
   /*=== 'reload' - checa se o tipo de navegação foi um reload*/
    window.location.href = 'index.html'; // se a informação for verdadeira ele retorna ao index.html da página
  }