const form = document.getElementById('comparaNumeros') //Criando uma constante que vai selecionar o Form

form.addEventListener('submit', function(e) {
    e.preventDefault();
    comparaNumeros();
})

function comparaNumeros() {
    let numeroUm = document.getElementById("numeroUm").value;
    let numeroDois = document.getElementById("numeroDois").value;

    numeroUm = Number(numeroUm);
    numeroDois = Number(numeroDois);

    const mensagemSucesso = `O  ${numeroDois} é maior que o ${numeroUm}!`;
    const mensagemErro = `O  ${numeroDois} é menor que o ${numeroUm}!`;
    const mensagemAtencao = `Os números são iguais!`;

    if (numeroUm < numeroDois) {
        const elementoMensagemSucesso = document.querySelector('.mensagemSucesso');
        elementoMensagemSucesso.innerHTML = mensagemSucesso;
        elementoMensagemSucesso.style.display = 'block';
     } if (numeroUm > numeroDois) { 
        const elementoMensagemErro = document.querySelector('.mensagemErro');
        elementoMensagemErro.innerHTML = mensagemErro;
        elementoMensagemErro.style.display = 'block';
     } else if (numeroUm == numeroDois) {
        const elementoMensagemAtencao = document.querySelector('.mensagemAtencao');
        elementoMensagemAtencao.innerHTML = mensagemAtencao;
        elementoMensagemAtencao.style.display = 'block';     
    }
}