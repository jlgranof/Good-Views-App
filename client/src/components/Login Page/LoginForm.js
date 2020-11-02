import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { TextField } from '@material-ui/core'
import Icon from '@material-ui/core/Icon';
import { Grid } from '@material-ui/core';
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

const LoginForm = ({ history, updateUser, currentUserId }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const classes = useStyles();

    const handleDemo = async (e) => {
        setEmail('demo@user.com');
        setPassword('password');
    }

    const handleSubmit = async (e) => {
        const res = await fetch('/api/session', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
            });

        if (res.ok) {
            const { token, user } = await res.json();
            console.log(user)
            console.log(token)
            history.push('/movies')
        }
    };

    const updateEmail = (e) => setEmail(e.target.value);
    const updatePassword = (e) => setPassword(e.target.value);

    if (currentUserId) {
        return <Redirect to="/movies" />
    }

    return (
        <>
        <h1>Login Page</h1>
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
            <form onSubmit={handleSubmit}>
                <TextField id="filled-full-width" variant="filled" InputLabelProps={{ shrink: true}} style={{ margin: 8 }}  label="Emal" placeholder="demo@user.com" type="text" onChange={updateEmail} />
                <br></br>
                <TextField id ="filled-full-width" variant="filled" InputLabelProps={{ shrink: true }} style={{margin: 8}} placeholder="password"  label="Password" type="password" onChange={updatePassword} />
                <br></br>
                <Button
                type="button"
                color="primary"
                variant="contained"
                onClick={handleDemo}
                className={classes.button}
                endIcon={<Icon>send</Icon>}
                >
                    Demo User
                </Button>
                <Button
                type="submit"
                color="primary"
                variant="contained"
                className={classes.button}
                endIcon={<Icon>send</Icon>}
                >
                    Login
                </Button>
            </form>
        </Grid>
        </>
    )
}

export default withRouter(LoginForm);
