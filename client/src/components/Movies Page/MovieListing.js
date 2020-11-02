import React from 'react';
import { NavLink } from 'react-router-dom'
import { CardContent, makeStyles, Card, CardActionArea, CardMedia } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        maxWidth: 170,
        margin: 10,
    },
})

const MovieListing = (props) => {
    const classes = useStyles();
    return (
            <Card className={classes.root}>
                <CardContent>
                    <a href={`/movies/${props.movie.id}`} >
                        <img src={props.movie.poster} alt={props.movie.name} height="200px"/>
                    </a>
                    <br></br>
                    <NavLink to={`/movies/${props.movie.id}`} props={props.movie.id}>{props.movie.name}</NavLink>
                    <p>IMDB Rating: {props.movie.imdbRating}/10</p>
                </CardContent>
            </Card>
    )
}

export default MovieListing
