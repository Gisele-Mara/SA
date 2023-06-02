// Seleciona os botões de login e cadastro pelo seu id
var btnSignin = document.querySelector("#signin")
var btnSignup = document.querySelector("#signup")

// Seleciona o elemento body do documento
var body = document.querySelector("body")

// função para troca de tela
btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js";
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js"
})

// Função para alternar a visibilidade da senha '' sign up''
function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password-input")
    var passwordIcon = document.getElementById("password-icon")
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text"
      passwordIcon.classList.remove("fa-eye-slash")
      passwordIcon.classList.add("fa-eye")
    } else {
      passwordInput.type = "password"
      passwordIcon.classList.remove("fa-eye")
      passwordIcon.classList.add("fa-eye-slash")
    }
  }

  // Função para alternar a visibilidade da senha no botão "Sign in"
function togglePasswordVisibilitySignIn() {
  var passwordInput = document.getElementById("password-input-signin");
  var passwordIcon = document.getElementById("password-icon-signin");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordIcon.classList.remove("fa-eye-slash");
    passwordIcon.classList.add("fa-eye");
  } else {
    passwordInput.type = "password";
    passwordIcon.classList.remove("fa-eye");
    passwordIcon.classList.add("fa-eye-slash");
  }
}

  
  