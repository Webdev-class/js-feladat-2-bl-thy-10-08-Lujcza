
const APIAdress = 'https://archive-api.open-meteo.com/v1/archive?';
async function f1 (lat, long, timeStr) {
    params = `latitude=${lat}&longitude=${long}&start_date=${timeStr}&end_date=${timeStr}&daily=temperature_2m_mean`;
    const data = await fetch(`${APIAdress}${params}`)
    .then(response => response.json());
    return Math.floor(data["daily"]["temperature_2m_mean"][0]);
}

module.exports = f1;