function renderCelsius() {
    let inputFahrenheit = document.getElementById('fahrenheit');
    let resultCelsius = parseFloat((inputFahrenheit.value - 32) * (5/9)).toFixed(2);

    document.getElementById('resultCelsius').innerHTML = `
    ${resultCelsius}°C
    `;
}