import React, { useState } from 'react';
import {TextField } from '@material-ui/core'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Grid } from '@material-ui/core'
import { withRouter } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    TextField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(2),
        width: '25ch'
    }
}))

const SignupForm = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const classes = useStyles('');

    const handleSubmit = async (e) => {
        e.preventDefault();
            console.log("here")
            const res = await fetch('/api/users', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName, lastName, username, email, password
                })
            })
            if (res.ok) {
                const { token, user } = await res.json();
                props.history.push('/log-in')
            }
    }

    const updateFirstName = (e) => setFirstName(e.target.value);
    const updateLastName = (e) => setLastName(e.target.value);
    const updateUserName = (e) => setUsername(e.target.value);
    const updateEmail = (e) => setEmail(e.target.value);
    const updatePassword = (e) => setPassword(e.target.value);
    const updateConfirmPassword = (e) => setConfirmPassword(e.target.value);


    return (
        <>
        <h1>Sign Up Page</h1>
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <form onSubmit={handleSubmit}>
                <TextField id="filled-full-width" variant="filled" InputLabelProps={{ shrink: true}} style={{ margin: 8 }}  label="First Name" placeholder="demo" type="text" value={firstName} onChange={updateFirstName} />
                <br></br>
                <TextField id="filled-full-width" variant="filled" InputLabelProps={{ shrink: true}} style={{ margin: 8 }}  label="Last Name" placeholder="user" type="text" value={lastName} onChange={updateLastName} />
                <br></br>
                <TextField id="filled-full-width" variant="filled" InputLabelProps={{ shrink: true}} style={{ margin: 8 }}  label="Username" placeholder="demouser" type="text" value={username} onChange={updateUserName} />
                <br></br>
                <TextField id="filled-full-width" variant="filled" InputLabelProps={{ shrink: true}} style={{ margin: 8 }}  label="Email" placeholder="demo@user.com" type="text" value={email} onChange={updateEmail} />
                <br></br>
                <TextField id="filled-full-width" variant="filled" InputLabelProps={{ shrink: true}} style={{ margin: 8 }}  label="Password" placeholder="password" type="password" value={password} onChange={updatePassword} />
                <br></br>
                <TextField id="filled-full-width" variant="filled" InputLabelProps={{ shrink: true}} style={{ margin: 8 }}  label="Confirm Password" placeholder="password" type="password" value={confirmPassword} onChange={updateConfirmPassword} />
                <br></br>
                <Button type="submit"
                color="primary"
                variant="contained"
                className={classes.button}
                endIcon={<Icon>send</Icon>}
                >
                    Sign Up
                </Button>
            </form>
        </Grid>
        </>
    )
}

export default withRouter(SignupForm);
