let amigos = [];

let nome = document.getElementById("amigo");
let lista = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

function adicionarAmigo(){
    if(nome.value != "" ){
        amigos.push(nome.value);
        console.log(amigos);
        limparCampo();
        exibirLista();
    }else{
        alert("Por favor, insira um nome");
    }
}

function limparCampo(){
    nome.value = "";
}

function exibirLista(){
    lista.innerHTML = "";
    for(i=0;i<amigos.length;i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo(){
    if(amigos.length > 1){
        let indice = Math.floor(Math.random() * amigos.length);
        resultado.innerText = amigos[indice];
    }else {
        alert("Adicione mais pessoas para sortear");
    }
}