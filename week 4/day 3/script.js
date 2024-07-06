document.getElementById('weatherForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const city = document.getElementById('city').value;
    const apiKey = 'f363e6347b4f46de87284325240607'; 
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    
    console.log(`Fetching weather data for: ${city}`);
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found or API error');
        }
        const data = await response.json();
        console.log('API response:', data);
        document.getElementById('temperature').textContent = data.current.temp_c;
        document.getElementById('humidity').textContent = data.current.humidity;
        document.getElementById('description').textContent = data.current.condition.text;
        document.getElementById('weatherResult').classList.remove('hidden');
    } catch (error) {
        alert(error.message);
        console.error('Error fetching weather data:', error);
    }
});
