
const botao = document.getElementById('calcular') //Pega ID e coloca em constante.

botao.onclick = () => {

    //Ao clicar no botao, coleta peso e altura
    let peso = document.getElementById('peso')
    let altura = document.getElementById('altura')

    //Denomina IMC baseado no valor do peso e altura
    const IMC = (peso.value / (altura.value ** 2)) * 10000

    let resultado = document.getElementById('result')
    
    resultado.textContent = IMC.toFixed(1)

    peso.value = ''
    altura.value = ''

};
