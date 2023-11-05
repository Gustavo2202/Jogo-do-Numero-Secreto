/* ---------------------------------------------------------------------------------------------- Variaveis ----------------------------------------------------------------------------------------------*/
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;


/* ---------------------------------------------------------------------------------------------- Codigo ----------------------------------------------------------------------------------------------*/


alert('Boas vindas ao jogo do numero secreto');

//enquanto chute nao for igual ao n.s
while (chute != numeroSecreto) {
    console.log(numeroSecreto)
    chute = prompt(`Digite um Numero entre 1 e ${numeroMaximo}: `);

    // se o chute for igual ao numero secreto ele vai executar esse codigo
    if (chute == numeroSecreto) {
        break;
    }
    // senao ele vai executar esse codigo
    else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto e menor que ${chute}`);
        } else {
            alert(`O numero secreto e maior que ${chute}`);
        }
        tentativas++;
    }
    
}
let palvraTenativa = tentativas > 1 ? " tentativas" : "tentativa";
alert(`Isso ai! Você acertou o Numero Secreto  ${numeroSecreto} com ${tentativas} ${palvraTenativa}`);
