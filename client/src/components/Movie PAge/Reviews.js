import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import ReviewListing from './ReviewListing'

const Reviews = (props) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`/api/reviews/${props.movieId}`);
            console.log(response)
            const responseData = await response.json();
            setReviews(responseData)
        }
        fetchData();

    }, []);

    const reviewComponents = reviews.map((review) => <ReviewListing key={review.id} review={review}/>)

    return (
        <div>
            <h2>Reviews</h2>
            <Grid>
            {reviewComponents}
            </Grid>
        </div>
    )
}

export default Reviews
