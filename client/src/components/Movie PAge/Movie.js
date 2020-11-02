import React, { useState, useEffect } from 'react';
import ReviewForm from './ReviewForm'
import { useParams } from 'react-router-dom'
import Reviews from './Reviews';

const Movie = (props) => {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`/api/movies/${id}`);
            const responseData = await response.json();
            // console.log(responseData)
            setMovie(responseData)
        }
        fetchData();

    }, []);
    return (
        <div>
            <div className="movie">
                <h1>{movie.name}</h1>
                <div className="poster">
                    <img src={movie.poster} alt={movie.name} />
                </div>
                <div className="movie-info">
                    <div className="basic-info">
                        <h5>Rating: {movie.rating}</h5>
                        <h5>Release Date: {movie.released}</h5>
                        <h5>Runtime: {movie.runtime}</h5>
                    </div>
                    <div className="cast">
                        <h5>Director(s): {movie.director}</h5>
                        <h5>Writer(s): {movie.writer}</h5>
                        <h5>Actors: {movie.actors}</h5>
                        <h5>Production Company: {movie.production}</h5>
                    </div>
                    <div className="countries">
                        <h5 className="language">Language(s): {movie.language}</h5>
                        <h5 className="country">Country(ies): {movie.country}</h5>
                    </div>
                    <div className="ratings">
                        <h5 className="meta">MetaScore: {movie.metascore}</h5>
                        <h5 className="imdb">IMDB Rating: {movie.imdbRating}</h5>
                    </div>
                </div>
            <br></br>
            </div>
            <br></br>
            <h3>Plot</h3>
            <h4>{movie.plot}</h4>
            <h3 className="review-form">Review Form</h3>
            <ReviewForm movieId={id} currentUserId={props.currentUserId}/>
            <Reviews movieId={id}/>
        </div>


    )
}

export default Movie;
