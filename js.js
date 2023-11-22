const apiKey = "dd8b3b110e0b9dc11780beedd35b9f82";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('#userInput');
const btn = document.querySelector('#userBtn');

async function checkWeather(city){

    

    const  response = await fetch(apiUrl +city+ `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector('#city').innerHTML = data.name;
    document.querySelector('#temp').innerHTML = `${data.main.temp} c`;
    document.querySelector('#humidity').innerHTML = `${data.main.humidity} %`;
    document.querySelector('#wind').innerHTML = `${data.wind.speed} km/h`;
    
    if(data.weather[0].main === 'Clouds'){
        document.querySelector('#weather-icon').src = 'images/clouds.png';
    }else if(data.weather[0].main === 'Clear'){
        document.querySelector('#weather-icon').src = 'images/clear.png';
    }else if(data.weather[0].main === 'Drizzle'){
        document.querySelector('#weather-icon').src = 'images/drizzle.png';
    }else if(data.weather[0].main === 'Snow'){
        document.querySelector('#weather-icon').src = 'images/snow.png';
    }else if(data.weather[0].main === 'Mist'){
        document.querySelector('#weather-icon').src = 'images/mist.png';
    }else if(data.weather[0].main === 'Rain'){
        document.querySelector('#weather-icon').src = 'images/rain.png';
    }

}

btn.addEventListener('click', () => {
    city = searchBox.value
    checkWeather(city);
});