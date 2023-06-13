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
// function verificarSenha(senha) {
//     if (senha.length < 8 || senha.length > 20) {
//       return false;
//     }
//     if (!/^[a-zA-Z0-9]+$/.test(senha)) {
//       return false;
//     }
//     return true;
//   }
  
  // // Selecionar o formulário de criação de conta
  // var formCadastro = document.querySelector('.second-content form');
  
  // // Adicionar um ouvinte de evento para o envio do formulário
  // formCadastro.addEventListener('submit', function(event) {
  //   event.preventDefault(); // Impedir o envio do formulário
  
  //   // Obter os valores dos campos de senha
  //   var senhaInput = formCadastro.querySelector('input[type="password"]');
  //   var confirmarSenhaInput = formCadastro.querySelector('input[type="password"][placeholder="Confirme sua senha"]');
  
  //   var senha = senhaInput.value;
  //   var confirmarSenha = confirmarSenhaInput.value;
  
  //   // Verificar se as senhas são iguais
  //   if (senha !== confirmarSenha) {
  //     alert("As senhas não coincidem!");
  //     return;
  //   }
  
  //   // Verificar a validade da senha
  //   if (!verificarSenha(senha)) {
  //     alert("A senha deve ter pelo menos 8 caracteres, no máximo 20 caracteres e conter apenas letras e números.");
  //     return;
  //   }
  
  //   // Se a senha passar pelas verificações, você pode prosseguir com o envio do formulário ou executar outras ações necessárias.
  //   alert("Formulário enviado com sucesso!");
  //   // formCadastro.submit(); // Descomente esta linha se quiser enviar o formulário.
  // });

  // var senhaCorreta = "admin123";
  // var tentativas = 0;
  
  // function verificarSenha() {
  //   var senhaDigitada = document.getElementById("password").value;
  
  //   var regexSenha = /^[a-zA-Z0-9]+$/; // Expressão regular para verificar letras e números
  //   var tamanhoMinimo = 5; // Mínimo de 5 caracteres
  
  //   if (senhaDigitada.match(regexSenha) && senhaDigitada.length >= tamanhoMinimo) {
  //     if (senhaDigitada === senhaCorreta) {
  //       alert("Senha correta! Acesso permitido.");
  //     } else {
  //       tentativas++;
  //       if (tentativas === 3) {
  //         alert("Você errou a senha três vezes. Seu acesso foi bloqueado.");
  //       } else {
  //         alert("Senha incorreta! Tente novamente.");
  //       }
  //     }
  //   } else {
  //     alert("Já foram feitas mais de 3 tentativas! Sua conta foi bloqueada, acesse seu email para libera-lá novamente");
  //   }
  // }
  
  // document.getElementById("signin").addEventListener("click", function (event) {
  //   event.preventDefault();
  //   verificarSenha();
  // });
  
  // document.getElementById("signup").addEventListener("click", function (event) {
  //   event.preventDefault();
  //   verificarSenha();
  // });
  
  

