import React from 'react';

const ReviewListing = (props) => {
    return (
        <div className="reviews">
            <h3>{props.review.User.username}'s review:</h3>
            <h4>Rating: {props.review.rating}/4 Stars</h4>
            <h4>Review: {props.review.body}</h4>
            <br></br>
        </div>
    )
}

export default ReviewListing
