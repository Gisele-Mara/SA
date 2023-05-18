let email = document.getElementById('email')
let senha = document.getElementById('senha')
let confirmarEmail = document.getElementById('confirmEmail')
let confirmarSenha = document.getElementById('confirmSenha')
let divEmail = document.getElementById('divEmail')
let divSenha = document.getElementById('divSenha')


function cadastrar(event){
event.preventDefault();
validaEmail()
validaSenha()
}


function validaEmail(){
    
if (email.value != confirmarEmail.value ){
 divEmail.innerHTML = ("Os endereçoes de email estão errados")
}else{
  divEmail.innerHTML= ""
}
}


function validaSenha(){

 if (senha.value != confirmarSenha.value){
    divSenha.innerHTML =("A senhas não sao compativeis")
}else{ 
    divSenha.innerHTML = ""
}
} 





