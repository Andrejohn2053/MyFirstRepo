
document.getElementById('btn').addEventListener('click', function() { 
    let cityName = document.getElementById('cityInput').value;
    let apikey = '6394c0ad4aa183b89f662c6bd62ecb0a';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric`;

    // Fetching weather data from the API
    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`An error occurred: ${response.status}`);
        }
        return response.json();
    })
    .then(weatherData => {
        // Extracting weather details from the API response
        let description = weatherData.weather[0].description;
        let temperature = weatherData.main.temp;
        let wind = weatherData.wind.speed;
        // Updating the webpage with the weather information
        document.getElementById('weather-info').innerHTML = `
            <p>Weather Description: ${description}</p>
            <p>Temperature: ${temperature} °C</p>
            <p>Wind Speed: ${wind} m/s</p>
        `;
    })
    .catch(error => {
        // Handling any errors that occurred during the fetch
        console.error('Error fetching the weather data:', error);
        document.getElementById('weather-info').innerHTML = `<p>Error: ${error.message}</p>`;
    });
});