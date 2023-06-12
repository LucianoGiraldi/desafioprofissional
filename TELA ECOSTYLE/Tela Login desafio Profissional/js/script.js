var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})

// Função para verificar a senha
function verificarSenha(senha) {
    if (senha.length < 8 || senha.length > 20) {
      return false;
    }
    if (!/^[a-zA-Z0-9]+$/.test(senha)) {
      return false;
    }
    return true;
  }
  
  // Selecionar o formulário de criação de conta
  var formCadastro = document.querySelector('.second-content form');
  
  // Adicionar um ouvinte de evento para o envio do formulário
  formCadastro.addEventListener('submit', function(event) {
    event.preventDefault(); // Impedir o envio do formulário
  
    // Obter os valores dos campos de senha
    var senhaInput = formCadastro.querySelector('input[type="password"]');
    var confirmarSenhaInput = formCadastro.querySelector('input[type="password"][placeholder="Confirme sua senha"]');
  
    var senha = senhaInput.value;
    var confirmarSenha = confirmarSenhaInput.value;
  
    // Verificar se as senhas são iguais
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }
  
    // Verificar a validade da senha
    if (!verificarSenha(senha)) {
      alert("A senha deve ter pelo menos 8 caracteres, no máximo 20 caracteres e conter apenas letras e números.");
      return;
    }
  
    // Se a senha passar pelas verificações, você pode prosseguir com o envio do formulário ou executar outras ações necessárias.
    alert("Formulário enviado com sucesso!");
    // formCadastro.submit(); // Descomente esta linha se quiser enviar o formulário.
  });
  
