const nameInput = document.querySelector('#card-holder');
const number = document.querySelector('#card-number');
const expDate = document.querySelector('.monthYear');
const cvc = document.querySelector('#card-Cvc');
const confirm = document.querySelector('.confirm');

function verificarPreenchimento() {
    // Verifica se todos os campos estão preenchidos
    if (
        nameInput.value.trim() === '' || 
        number.value.trim() === '' ||
        expDate.value.trim() === '' ||
        cvc.value.trim() === ''
    ) {
        alert('Por favor, preencha todos os campos.');
        return false; // Nem todos os campos estão preenchidos
    }
    
    // Verifica se o número do cartão de crédito é válido
    if (!validarNumeroCartao(number.value)) {
        alert('Número de cartão de crédito inválido. Por favor, verifique e tente novamente.');
        return false; // Número de cartão de crédito inválido
    }
    
    return true; // Todos os campos estão preenchidos e o número do cartão de crédito é válido
}

confirm.addEventListener('click', function(event) {
    event.preventDefault(); // Evita o envio do formulário (se existir)
    
    if (verificarPreenchimento()) {
        // Faça algo se todos os campos estiverem preenchidos
        console.log('Todos os campos estão preenchidos!');
    }
});

function validarNumeroCartao(numero) {
    // Remover espaços em branco
    numero = numero.replace(/\s/g, ''); 
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
    let digitoVerificador = parseInt(numero[numero.length - 1], 10);
    numero = numero.slice(0, -1);
  
    for (let i = numero.length - 1; i >= 0; i--) {
        let digito = parseInt(numero[i], 10);
  
        if ((numero.length - i) % 2 === 0) {
            digito *= 2;

            if (digito > 9) digito -= 9;
        } 
  
        soma += digito;
    }
  
    resto = soma % 10;
  
    return (digitoVerificador === (resto === 0 ? 0 : 10 - resto)); 
    // se o resto for 0 será retornado 0, senão subtrai 10 - o resto, 
    // para garantir que sempre retornaremos um valor entre 0 e 9.
}
