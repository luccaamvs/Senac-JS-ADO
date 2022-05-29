const BTN = document.getElementById('enviar')
BTN.addEventListener('click', function(){
    let user_number = document.getElementById('numero').value
    let resultado = document.getElementById('resultado')

    let url = `HTTP://NUMBERSAPI.COM/${user_number}/math`

    fetch(url).then(function(response){
        return response.text()
    }).then(function(curiosity){
        resultado.textContent = curiosity
    })
})
