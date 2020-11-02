const fetch = require('node-fetch');
require('dotenv').config();

async function api(url) {
    const id = getID(url);
    const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${id}&plot=full`);
    const data = await response.json();
    return data;
}

const getID = (url) => {
    const urlSplit = url.split('/');
    return(urlSplit[urlSplit.indexOf('title') + 1])
}

module.exports = { api };
