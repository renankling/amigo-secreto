let amigos = [];

let nome = document.getElementById("amigo");

function adicionarAmigo(){
    if(nome.value != "" ){
        amigos.push(nome);
        console.log(amigos);
        limparCampo();
    }else{
        alert("Por favor, insira um nome");
    }
}

function limparCampo(){
    nome.value = "";
}