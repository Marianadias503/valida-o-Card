document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.querySelector('#card-holder');
    const numberInput = document.querySelector('#card-number');
    const expMMInput = document.querySelector('#card-MM');
    const expYYInput = document.querySelector('#card-YY');
    const cvcInput = document.querySelector('#card-Cvc');
    const confirmButton = document.querySelector('.confirm');
    
    const cardNumberDisplay = document.querySelector('.dados p:first-child');
    const cardNameDisplay = document.querySelector('.dados-card p:first-child');
    const cardExpDisplay = document.querySelector('.dados-card p:last-child');
    const cardCvcDisplay = document.querySelector('.image-card-back p');

    function updateCardData() {
        cardNumberDisplay.textContent = numberInput.value || '0000 0000 0000 0000';
        cardNameDisplay.textContent = nameInput.value || 'JANE APPLESEED';
        cardExpDisplay.textContent = `${expMMInput.value || '00'}/${expYYInput.value || '00'}`;
        cardCvcDisplay.textContent = cvcInput.value || '000';
    }

    confirmButton.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o envio do formulário (se existir)
        updateCardData();
    });
});


function apenasNumeros(evt) {
    // Obtém o evento de teclado
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;

    // Verifica se o caractere digitado é um número ou um dos caracteres de controle
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        // Se não for um número, cancela a ação padrão
        evt.preventDefault();
        return false;
    }
    return true;
}
function apenasLetras(evt) {
    // Obtém o evento de teclado
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;

    // Verifica se o caractere digitado é uma letra ou um dos caracteres de controle
    if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122) && charCode !== 32) {
        // Se não for uma letra, cancela a ação padrão
        evt.preventDefault();
        return false;
    }
    return true;
}
function verificarPreenchimento() {
    const nameInput = document.querySelector('#card-holder');
    const numberInput = document.querySelector('#card-number');
    const expDate = document.querySelector('#card-MM');
    const cvc = document.querySelector('#card-Cvc');
     
    // Verifica se todos os campos estão preenchidos
    if (
        nameInput.value.trim() === '' || 
        numberInput.value.trim() === '' ||
        expDate.value.trim() === '' ||
        cvc.value.trim() === ''
    ) {
        alert('Por favor, preencha todos os campos.');
        return false; // Nem todos os campos estão preenchidos
    }
    
    // Verifica se o número do cartão de crédito é válido
    if (!validarNumeroCartao(numberInput.value)) {
        alert('Número de cartão de crédito inválido. Por favor, verifique e tente novamente.');
        return false; // Número de cartão de crédito inválido
    }
// Se o número do cartão for válido, exibe a mensagem correta
alert('Número de cartão de crédito correto.');
window.location.href = '../card-complete/index.html';


return true;
}
const confirmButton = document.querySelector('.confirm');
confirmButton.addEventListener('click', function(event) {
    event.preventDefault();
    
    if (verificarPreenchimento()) {
        console.log('Todos os campos estão preenchidos!');
    }
});


confirm.addEventListener('click', function(event) {
    event.preventDefault(); // Evita o envio do formulário (se existir)
    
    if (verificarPreenchimento()) {
        // Faça algo se todos os campos estiverem preenchidos
        console.log('Todos os campos estão preenchidos!');
    }
});

function validarNumeroCartao(numero) {
    // Remover espaços em branco e traços
    const cleanNumber = numero.replace(/\s/g, '');

      //    /: Começa a expressão regular.
   //     \s: É um metacaractere que corresponde a qualquer caractere de espaço em branco
  //        /g: É um modificador da expressão regular que significa "global".   Isso indica que a correspondência deve ser feita em toda a string e 
  //não apenas na primeira ocorrência encontrada.
    // Verificar se o número está em um formato válido

    if (!/^\d+$/.test(numero)) return false;
    /*   '\d :  usado para representar qualquer dígito decimal de 0 a 9
    +: Este é um quantificador que indica que o padrão anterior (neste caso, \d) deve aparecer uma ou mais vezes.
     $: Este é um âncora que significa "fim da corda". Ele indica que o padrão deve ser encontrado no final da string.*/
    // Verifica se o número tem pelo menos 13 e no máximo 19 dígitos
    if (numero.length < 13 || numero.length > 19) return false;
  
    //  algoritmo de Luhn
    let soma = 0;
    let resto = 0;       
  
    for (let i = numero.length - 1; i >= 0; i--) {
        let digito = parseInt(numero[i], 10);
  
        if ((cleanNumber.length - i) % 2 === 0) {
            digito *= 2;

            if (digito > 9) digito -= 9;

        } 
  
        soma += digito;
    }
  
 
   
    resto = soma % 10;

    console.log("Soma:", soma);
    console.log("Resto:", resto);

    return (resto === 0);
}

