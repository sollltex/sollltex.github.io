function updateWeather() {
    const apiKey = 'cb0b7ede2c36777bdc6b64d3332a2f60';
    const city = 'Belgorod';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data && data.main && data.weather && data.weather.length > 0) {
                const temperature = data.main.temp;
                const weatherDescription = data.weather[0].description;
                
                document.getElementById('weather').textContent = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);
            } else {
                console.error('Неверный формат данных от API:', data);
                document.getElementById('weather').textContent = 'Ошибка данных';
                document.getElementById('temp').textContent = '--';
            }
        })
        .catch(error => {
            console.error('Ошибка при получении данных о погоде:', error);
            document.getElementById('weather').textContent = 'Не удалось загрузить погоду';
            document.getElementById('temp').textContent = '--';
        });
}

updateWeather();