
const BTN = document.getElementById('enviar') //Relaciona o botao com a funcionalidade de clicar.

BTN.addEventListener('click', function(){

    let username = document.getElementById('nome').value
    let age_output = document.getElementById('age-output')
    let name_output = document.getElementById('name-output')

    let url = `https://api.agify.io/?name=${username}`

    fetch(url).then(function(response){ //Consome a API junto com a variavel inserida pelo usuario e a retorna em string
        return response.text()

    }).then(function(response){

        response = JSON.parse(response) //JSON para String
        
        age_output.textContent = response.age
        name_output.textContent = response.name
    })
})
