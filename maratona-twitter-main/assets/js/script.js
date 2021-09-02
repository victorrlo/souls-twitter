// VARIÁVEIS
// uma caixinha na memória que guarda um valor

// var => má prática, não utilizar (variável global)
  
// let => variáveis com escopo
// const => constante com escopo

/*
let numero = 0;
const nome = "Solaire";
const booleano = true;


console.log(numero);
console.log(nome);
console.log(booleano);

let numero2 = 2;
let numero3 = 3;

let soma = 2+2;
let soma2 = numero2 + numero3;

console.log(soma);
console.log(soma2);
*/

/** 
 * operadores lógicos
 * 
 * ==/=== -> o === também compara tipo de dado
 * !=/!==
 * >/>=
 * </<=
 * 
*/

/**
 * funções
 * 
 * bloco de código que encapsula uma série de instruções, 
 * mas geralmente é algo bem específico.
 * 
 */

/*
// declaração
function soma(numero1, numero2){
    let total = a + b;
    console.log(total);
}

// chamada ou call
soma(1, 2);
*/


/**
 * DOM
 * Document Object Model(Modelo de Objeto do Documento)
 * 
 * 
 */

const cabecalho = document.querySelector('header');

console.log(cabecalho);

/**
 * eventos => ações que o usuário executa na página, como clicar num botão
 * 
 * elemento.addEventListener('evento', função);
 */

/*
const escreverMensagem = document.querySelector('button');

function imprimirNoConsole(){
    console.log('Glória ao Sol!');
}

escreverMensagem.addEventListener('click', imprimirNoConsole);
*/

// entender o problema, pensar em como resolver e descrever o passo a passo
/**
 * primeiro passo: capturar o valor da text area para criar o tweet
 * segundo passo: construir o tweet
 * terceiro passo: imprimir o tweet
 * 
 */


const escreverMensagem = document.querySelector('button');
const textarea = document.querySelector('textarea'); // primeiro passo
const feed = document.querySelector(".conteudoPrincipal__listaTweets");

function imprimirNoConsole(event){
    event.preventDefault();
    
    const mensagemTextarea = textarea.value;
    criarMensagem(mensagemTextarea);

}

escreverMensagem.addEventListener('click', imprimirNoConsole);



function criarMensagem(mensagemTexto){
// CRIAR O TWEET
// TEXTO DO TWEET ***
// NOME
// FOTO
// NOME USUÁRIO
// HORÁRIO

    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();

    // OBJETO
    const mensagem = {
            nome: "Morto-vivo Escolhido",
            foto: "./orange soapstone/Stub_Icon.png",
            usuario: "@chosenundead",
            texto: mensagemTexto,
            tempo: `${hora}:${minutos}` // INTERPOLAÇÃO DE STRINGS ${VARIÁVEL}:${VARIÁVEL}
    }

    listarMensagem(mensagem);
}

function listarMensagem(mensagem){

    const {nome, foto, usuario, texto, tempo} = mensagem;

    // CRIANDO ELEMENTOS PARA LISTAR O TEMPLATE
    let li = document.createElement("li");
    li.classList.add("conteudoPrincipal__tweet");
    
    let img = document.createElement("img");
    img.src = foto;
    img.classList.add("tweet__fotoPerfil")

    let div = document.createElement("div");
    div.classList.add("tweet__conteudo")

    let h2 = document.createElement("h2");
    h2.innerText = nome;

    let span = document.createElement("span");
    span.innerText = `${usuario} - ${tempo}`;

    let p = document.createElement("p");
    p.innerText = texto;

    // ADICIONANDO OS ELEMENTOS DENTRO DA LI
    li.appendChild(img);
    li.appendChild(div);

    // ADICIONANDO OS ELEMENTOS DENTRO DA DIV
    div.appendChild(h2);
    div.appendChild(span);
    div.appendChild(p);

    console.log(li);
    feed.appendChild(li);

    textarea.value = ""; // LIMPAR CAMPO DE ENTRADA

}