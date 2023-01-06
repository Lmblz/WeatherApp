function hideImgCondition() {
    console.log('abcbcb')
    const image = document.querySelector('#condition-img')
    image.attributes.src = 'src=""'
        ? image.setAttribute('hidden', '')
        : ''
}

hideImgCondition();

let optionsArr = []

function changeInputs() {

    optionsArr = [
        {input: 'temperature', path: data.current.temp_c, suffixe: '°C'},
        {input: 'feelslike', path: data.current.feelslike_c},
        {input: 'time', path: data.current.last_updated},
        {input: 'condition', path: data.current.condition.text},
        {input: 'condition-img' , path: data.current.condition.icon},
        {input: 'wind', path: data.current.gust_kph},
        {input: 'rainchance', path: data.forecast.forecastday[0].day.daily_chance_of_rain},
        {input: 'sunrise', path: data.forecast.forecastday[0].astro.sunrise},
        {input: 'sunset', path: data.forecast.forecastday[0].astro.sunset},
    ]

    for (let i = 0; i < optionsArr.length; i ++) {
        let param = optionsArr[i].input
        let parampath = optionsArr[i].path
        let input = document.querySelector('#' + param)
        let request = parampath

        switch(param) {
            case 'temperature':
                input.innerHTML = request + '°C'
                break
            case 'feelslike':
                input.innerHTML = request + '°C'
                break
            case 'wind':
                input.innerHTML = request + 'km/h'
                break
            case 'rainchance': 
                input.innerHTML = request + '%'
            case 'condition-img':
                input.setAttribute('src', request)
                input.removeAttribute('hidden')
                break
            case 'time':
                request = request.split(' ')[1]
                input.innerHTML = request
            default: 
                input.innerHTML = request
                break
        }
    }
}

var date = new Date().toString().split(' ')
date.splice(4,6)
console.log(date)

switch(date[0]) {
    case 'Mon':
        date[0] = 'Lundi'
        break
    case 'Tue':
        date[0] = 'Mardi'
        break
    case 'Wed':
        date[0] = 'Mercredi'
        break
    case 'Thu':
        date[0] = 'Jeudi'
        break
    case 'Fri':
        date[0] = 'Vendredi'
        break
    case 'Sat':
        date[0] = 'Samedi'
        break
    case 'Sun':
        date[0] = 'Dimanche'
        break
}

switch(date[1]) {
    case 'Jan':
        date[1] = 'Janvier'
        break
    case 'Feb':
        date[1] = 'Février'
        break
    case 'Mar':
        date[1] = 'Mars'
        break
    case 'Apr':
        date[1] = 'Avril'
        break
    case 'May':
        date[1] = 'Mai'
        break
    case 'Jun':
        date[1] = 'Juin'
        break
    case 'Jul':
        date[1] = 'Juillet'
        break
    case 'Aug':
        date[1] = 'Aout'
        break
    case 'Sep':
        date[1] = 'Septembre'
        break
    case 'Oct':
        date[1] = 'Octobre'
        break
    case 'Nov':
        date[1] = 'Novembre'
        break
    case 'Dec':
        date[1] = 'Décembre'
        break
}

let dateD = date[0]
let dateM = date[1]
let dateN = date[2]
let dateY = date[3]

document.querySelector('h2#date').innerHTML = `${dateD} ${dateN} ${dateM} ${dateY}`
