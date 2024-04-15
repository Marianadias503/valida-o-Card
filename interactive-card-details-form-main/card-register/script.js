
const nameInput = document.querySelector('#card-holder')
const number = document.querySelector('#card-number')
const expDate = document.querySelector( '.monthYear')
const cvc= document.querySelector('#card-Cvc')
const confirm = document.querySelector('.confirm')


function verificarPreenchimento() {

    if (
      nameInput.value.trim() === '' || //trim = remove os espaços em brancos na ecsrita
      number.value.trim() === '' ||
      expDate.value.trim() === '' ||
      cvc.value.trim() === ''
    ) {
      alert('Por favor, preencha todos os campos.');
      return false; // Nem todos os campos estão preenchidos
    }
    return true; // Todos os campos estão preenchidos
  }
  
  confirm.addEventListener('click', function(event) {
    event.preventDefault(); // Evita o envio do formulário (se existir)
    
    if (verificarPreenchimento()) {
      // Faça algo se todos os campos estiverem preenchidos
      console.log('Todos os campos estão preenchidos!');
    }
  });
  