let amigos = [];

let nome = document.getElementById("amigo");
let lista = document.getElementById("listaAmigos");

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