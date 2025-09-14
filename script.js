let btnRefeicao = document.getElementById("btnrefeicao");
let btnBebida = document.getElementById("btnbebida");
let btnPorcao = document.getElementById("btnporcao");
let btnPastel = document.getElementById("btnpastel");

let divBebida = document.getElementById("bebidasetc");
let divRefeicao = document.getElementById("refeicoes");
let divPorcao = document.getElementById("porcoes")
let divPastel = document.getElementById("pasteis");

/*
    if(divBebida.style.display == ""){
        btnBebida.style.color = 'white'
        btnBebida.style.transform = 'translateY(-5px)'
        }    

*/

btnRefeicao.addEventListener("click", function abrirRefeicao(){

    divPorcao.style.display = 'none';
    divBebida.style.display = 'none';
    divPastel.style.display = 'none';
    divRefeicao.style.display = 'block';
   
})


btnBebida.addEventListener("click", function abrirBebida(){

    divPorcao.style.display = 'none';
    divRefeicao.style.display = 'none';
    divPastel.style.display = 'none';
    divBebida.style.display = 'block';

})

btnRefeicao.addEventListener("click", function abrirRefeicao(){

    divPorcao.style.display = 'none';
    divBebida.style.display = 'none';
    divPastel.style.display = 'none';
    divRefeicao.style.display = 'block';
   
})


btnPorcao.addEventListener("click", function abrirorcao(){

    divBebida.style.display = 'none';
    divRefeicao.style.display = 'none';
    divPastel.style.display = 'none';
    divPorcao.style.display = 'block';

})

btnPastel.addEventListener("click", function abrirorcao(){

    divBebida.style.display = 'none';
    divRefeicao.style.display = 'none';
    divPorcao.style.display = 'none';
    divPastel.style.display = 'block';

})

let data = new Date();
if(data.getDay() == 6){
    divRefeicao.innerHTML += "<div id='marmitasabado' class='produtos'><table><tr><td><h2>Especial de Sabado</h2></td></tr><tr><td>Carne de Panela</td><td>30,00</td><td></td></tr><tr><td class='h2diferente'>Frango Assado</td><td class='h2diferente'>30,00</td></tr><tr><td><h3>Feijões disponiveis</h3></td></tr><tr><td>Feijao de Caldo</td><td>Feijao Preto c/ Calabresa</td></tr></table></div>"
}
if(data.getDay() == 1){
    divRefeicao.innerHTML += "<div id='marmitadomingo' class='produtos'><table><tr><td><h2>Especial de Domingo</h2></td></tr><tr><td>Espetinho Contra File </td><td>30,00</td></tr><tr><td class='h2diferente'>Espetinho de Almondega</td><td class='h2diferente'>30,00</td></tr><tr><td>Espetinho Frambacon</td><td>28,00</td></tr><tr><td class='h2diferente'>Espetinho Linguiça</td><td class='h2diferente'>28,00</td></tr><tr><td>Espetinho Tulipa</td><td>28,00</td></tr><tr><td class='h2diferente'>Espetinho Coração</td><td class='h2diferente'>28,00</td></tr><tr><td>Carne de Panela</td><td>28,00</td><td></td></tr><tr><td><h3>Feijões disponiveis</h3></td></tr><tr><td>Feijao de Caldo</td><td>Feijao Tropeiro</td></tr></table></div>"
}