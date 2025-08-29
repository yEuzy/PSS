let btnRefeicao = document.getElementById("btnrefeicao");
let divBebidas = document.getElementById("bebidasetc");
let btnBebidas = document.getElementById("btnbebidas")

btnRefeicao.addEventListener("click", function abrirRefeicao(){
    divBebidas.style.display = 'none'
})

btnBebidas.addEventListener("click", function abrirRefeicao(){
    divBebidas.style.display = 'block'
})