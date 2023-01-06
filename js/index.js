const API_URL = 'http://api.weatherapi.com/v1/forecast.json'
const API_KEY = 'a4b4987f680c440496473323230601'
var API_CITY = 'Paris'
var data = ''

document.addEventListener("DOMContentLoaded", function() {
    document.URL.split('=')[1] !== undefined
        ? API_CITY = document.URL.split('=')[1].replace('#', '')
        : ''

    let cityTitle = document.querySelector('#citychosen')
    let placeholderInput = document.querySelector('#city')
    cityTitle.innerHTML = API_CITY
    placeholderInput.setAttribute('placeholder', API_CITY)

    requestWeather()
});

function requestWeather() {
    if (API_CITY != '') {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${API_URL}?key=${API_KEY}&q=${API_CITY}&aqi=no`)
        xhr.send()
    
        xhr.onload = () => {
            if (xhr.status === 200) {
                try {
                    data = JSON.parse(xhr.response);
                } catch (e) {
                    console.error(e);
                }
            } else {
                console.error(xhr.statusText)
            }
            console.log(data)
            changeInputs();
        } 
    } else {
        alert('Veuillez entrer une ville')
    }
}