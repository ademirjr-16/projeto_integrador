let nomeInput = document.getElementById("nome");
let emailInput = document.getElementById("email");
let enderecoInput = document.getElementById("endereco");
let numeroInput = document.getElementById("numero");
let bairroInput = document.getElementById("bairro");
let cidadeInput = document.getElementById("cidade");
let senhaInput = document.getElementById("senha");
let confirmaInput = document.getElementById("confirmaSenha");
let telefoneInput = document.getElementById("telefone");


nomeInput.addEventListener("input", (e) =>{
    console.log(e.target.value)
    let valorIpt = e.target.value

    if (valorIpt.length < 3) {
        nomeInput.classList.remove("correct");
        nomeInput.classList.add("error");
       
    }else{
        nomeInput.classList.remove("Error");
        nomeInput.classList.add("correct");
        
    }


})

emailInput.addEventListener("input", (e) =>{
    console.log(e.target.value)
    let valor = e.target.value
    let regex = /^\S+@\S+\.\S+$/
    if (regex.test(valor)) {
        emailInput.classList.remove("error");
        emailInput.classList.add("correct");
        
    }else{
        emailInput.classList.remove("correct");
        emailInput.classList.add("error");
      
    }


})

telefoneInput.addEventListener("input", (e) =>{
    console.log(e.target.value)
    let valor = e.target.value
    let regex = /^\(?\d{2}\)?\s?\d{5}-\d{4}$/
    if (regex.test(valor)) {
        telefoneInput.classList.remove("error");
        telefoneInput.classList.add("correct");
        
    }else{
        telefoneInput.classList.remove("correct");
        telefoneInput.classList.add("error");
      
    }


})

enderecoInput.addEventListener("input", (e) =>{
    console.log(e.target.value)
    let valorIpt = e.target.value

    if (valorIpt.length < 1) {
        enderecoInput.classList.remove("correct");
        enderecoInput.classList.add("error");
       
    }else{
        enderecoInput.classList.remove("Error");
        enderecoInput.classList.add("correct");
        
    }


})


bairroInput.addEventListener("input", (e) =>{
    console.log(e.target.value)
    let valorIpt = e.target.value

    if (valorIpt.length < 1) {
        bairroInput.classList.remove("correct");
        bairroInput.classList.add("error");
       
    }else{
        bairroInput.classList.remove("Error");
        bairroInput.classList.add("correct");
        
    }


})

cidadeInput.addEventListener("input", (e) =>{
    console.log(e.target.value)
    let valorIpt = e.target.value

    if (valorIpt.length < 1) {
        cidadeInput.classList.remove("correct");
        cidadeInput.classList.add("error");
       
    }else{
        cidadeInput.classList.remove("Error");
        cidadeInput.classList.add("correct");
        
    }


})

function validarSenha() {
    let senha = senhaInput.value;
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/; 
    
    if (regex.test(senha)) {
        senhaInput.classList.remove("error");
        senhaInput.classList.add("correct");
    } else {
        senhaInput.classList.remove("correct");
        senhaInput.classList.add("error");
    }
}


function validarConfirmaSenha() {
    let senha = senhaInput.value;
    let confirmaSenha = confirmaInput.value;

    if (senha === confirmaSenha && senha.length > 0) {
        confirmaInput.classList.remove("error");
        confirmaInput.classList.add("correct");
    } else {
        confirmaInput.classList.remove("correct");
        confirmaInput.classList.add("error");
    }
}


senhaInput.addEventListener("input", (e) => {
    validarSenha();
    validarConfirmaSenha(); 
});


confirmaInput.addEventListener("input", (e) => {
    validarConfirmaSenha();
});





