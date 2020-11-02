import React from 'react';
import Cookies from 'js-cookie'
import { makeStyles, useTheme } from '@material-ui/core'
import { AppBar, Drawer, List, ListItem, ListItemText} from '@material-ui/core'
import  ChevronLeftIcon  from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { Toolbar } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    padding: '0 520px'
  }
}));

const NavBar = (props) => {
    const classes = useStyles();

    const logout = (r) => {
      fetch(`/api/session`, {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
          "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
      },
    }).then(() => props.updateUser());
    }

  if(!props.currentUserId) {
    return (
        <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" href="/">Main Page</Button>
          <Button color="inherit" href="/movies">Movies</Button>
          <Typography variant="h6" className={classes.title}>
            Good Views
          </Typography>
          <Button color="inherit" href="/log-in">Login</Button>
          <Button color="inherit" href="/sign-up">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </div>
    )
  } else if (props.currentUserId) {
    return (
    <div className={classes.root}>
    <AppBar position="static" >
      <Toolbar>
        <Button color="inherit" href="/">Main Page</Button>
        <Button color="inherit" href="/movies">Movies</Button>
        <Typography variant="h6" className={classes.title}>
          Good Views
        </Typography>
        <Button color="inherit"  onClick={logout}>Logout</Button>
      </Toolbar>
    </AppBar>
    </div>
    )
  }
}

export default NavBar;
