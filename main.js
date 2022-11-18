const btnE = document.getElementById('btn')
const input = document.getElementById('input')

function cargarCiudad(ciudad) {

    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=fdd533266e28101881f610f2b8f1ebe1&lang=es "
        , function (data) {

            
            document.querySelector(".container").style.visibility = "visible"
            document.querySelector("#ciudad").textContent = data.name

            let temp = String(data.main.temp).slice(0, 2)
            document.querySelector("#temp").innerHTML = temp + '<sup>°C</sup>'

            document.querySelector("#icon").setAttribute('src', "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png")

            document.querySelector("#descrp").textContent = data.weather[0].description       

        }).fail(function (data) {
            let objectError = JSON.parse(data.responseText)
            let message = objectError.message

            document.querySelector(".error").innerHTML = message

        })

}

btnE.addEventListener('click', (e) => {

    e.preventDefault()
    cargarCiudad(input.value)

})