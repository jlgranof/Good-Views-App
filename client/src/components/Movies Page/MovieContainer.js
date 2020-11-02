import React, { useState, useEffect } from 'react';
import MovieListing from './MovieListing'
import { GridList } from '@material-ui/core'


function MovieContainer () {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/movies/');
            const responseData = await response.json();
            setMovies(responseData)
        }
        fetchData();

    }, []);


    const movieComponents = movies.map((movie) => <MovieListing key={movie.id} movie={movie}/>)
    return (
        <>
        <h1>Movie List</h1>
        <GridList
            MovieContainer
            direction="row"
            justify="center"
            alignItems="center"
            cols={3}
        >
            {movieComponents}
        </GridList>
        </>
    )
}

export default MovieContainer;
