import React, { useState } from 'react';
import { TextField, FormControl, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



const ReviewForm = ({currentUserId, movieId}) => {
    const [rating, setRating] = useState();
    const [body, setBody] = useState();
    const userId = currentUserId
    // const rating = 4;

    const handleSubmit = async (e) => {
      console.log('here')
      const res = await fetch(`/api/reviews/${movieId}`, {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ movieId, userId, rating, body }),
          });

      if(res.ok) {
        const { id } = await res.json()
        console.log(id)
      }
  };

  const updateRating = (e) => setRating(e.target.value);
  const updateBody = (e) => setBody(e.target.value)

    const classes = useStyles();
    return (
        <form onSubmit={handleSubmit}>
            <FormControl variant="filled" className={classes.formControl} >
                <InputLabel id="demo-simple-select-filled-label">Rating</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={rating}
                    onChange={updateRating}
                >
                <MenuItem value={1}>One</MenuItem>
                <MenuItem value={2}>Two</MenuItem>
                <MenuItem value={3}>Three</MenuItem>
                <MenuItem value={4}>Four</MenuItem>
                </Select>
            </FormControl>
            <TextField
                id="filled-multiline-static"
                label="Review"
                multiline
                fullWidth
                rows={7}
                placeholder="Enter your review here..."
                value={body}
                variant="filled"
                onChange={updateBody}
            />
            <Button type="submit">Submit</Button>
        </form>
    )
}

export default ReviewForm
