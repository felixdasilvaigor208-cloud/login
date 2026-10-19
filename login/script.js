
const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const email = document.getElementById("email");
const numero = document.getElementById("numero");
const senha = document.getElementById("senha");
const confirmar = document.getElementById("confirmar");
const  botaocadastro = document.getElementById("caadastro");


cadastro.addEventListener("click", function () {
    const nomeUsuario = nome.value;
    const senhaDigitada = senha.value;
    
    if(nomeUsuario === "admin" && senhaDigitada ==="1234") {
        alert("voçe fez login em sua conta")
    }else if(nomeUsuario=== ""&& senhaDigitada ===""){
             alert( "preencha todos os campos")
    }else{
        alert("acesso negado")
    }
});


