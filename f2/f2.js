/*
Készítsd el az előző feladat azon változatát ahol megadjuk az óraszámot is.
Csak az adott órára vonatkozó hőmérséklettel térjen vissza a függvény.
*/

const locations = require('../locations.json');
const APIAdress = 'https://archive-api.open-meteo.com/v1/archive?';

const f2 = async (lat, long, timeStr, hour) => {
    params = `latitude=${lat}&longitude=${long}&start_date=${timeStr}&end_date=${timeStr}&hourly=temperature_2m`;
    const data = await fetch(`${APIAdress}${params}`)
    .then(response => response.json());
    return data["hourly"]["temperature_2m"][hour];
}
module.exports = f2;