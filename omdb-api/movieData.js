const api = require('./api');

async function getData(url) {
    const data = await api.api(`${url}`);
    return({
        title: data.Title,
        rating: data.Rated,
        released: data.Released,
        releasedTimeLapsed: Math.floor((new Date(data.Released).getTime()) / 1000 / 60 / 60 / 24),
        runtime: data.Runtime,
        genre: await getGenreIds(data.Genre),
        director: data.Director,
        writer: data.Writer,
        actors: data.Actors,
        plot: data.Plot,
        language: data.Language,
        country: data.Country,
        poster: data.Poster,
        metascore: data.Metascore,
        imdbRating: data.imdbRating,
        imdbID: data.imdbID,
        production: data.Production
    })
}

async function getGenreIds(Genre) {
    let genreIds = [];
    let genres = await Genre.split(', ');
    for (let i = 0; i < genres.length; i++) {
        switch(genres[i]) {
            case 'Action':
                 await genreIds.push(1)
                 break
            case 'Adventure':
                await genreIds.push(2)
                break
            case 'Animation':
                await genreIds.push(3)
                break
            case 'Biography':
                await genreIds.push(4)
                break
            case 'Comedy':
                await genreIds.push(5)
                break
            case 'Crime':
                await genreIds.push(6)
                break
            case 'Documentary':
                await genreIds.push(7)
                break
            case 'Family':
                await genreIds.push(8)
                break
            case 'Fantasy':
                await genreIds.push(9)
                break
            case 'Film Noir':
                await genreIds.push(10)
                break
            case 'History':
                await genreIds.push(11)
                break
            case 'Horror':
                await genreIds.push(12)
                break
            case 'Music':
                await genreIds.push(13)
                break
            case 'Musical':
                await genreIds.push(14)
                break
            case 'Mystery':
                await genreIds.push(15)
                break
            case 'Romance':
                await genreIds.push(16)
                break
            case 'Sci-Fi':
                await genreIds.push(17)
                break
            case 'Sport':
                await genreIds.push(18)
                break
            case 'Superhero':
                await genreIds.push(19)
                break
            case 'Thriller':
                await genreIds.push(20)
                break
            case 'War':
                await genreIds.push(21)
                break
            case 'Western':
                await genreIds.push(22)
                break
            case 'Drama':
                await genreIds.push(23)
                break
            default:
                await genreIds.push(null)
        }
    }
    return genreIds;
}

module.exports = { getData }
