import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cookies from 'js-cookie'

import UserList from './components/UsersList';
import LoginForm from './components/Login Page/LoginForm'
import MovieContainer from './components/Movies Page/MovieContainer';
import SignupForm from './components/Signup Page/SignupForm';
import NavBar from './components/NavBar';
import Movie from './components/Movie PAge/Movie'
import HomePage from './components/HomePage';

function getCurrentUserId() {
    const authToken = Cookies.get("token");
    if (authToken) {
      try {
        const payload = authToken.split(".")[1];
        const decodedPayload = atob(payload);
        const payloadObj = JSON.parse(decodedPayload);
        const { data } = payloadObj;
        return data.id;
      } catch (e) {
        Cookies.remove("token");
      }
    }
}

function App() {
    const [currentUserId, setCurrentUserId] = useState(getCurrentUserId());
    const [needLogin, setNeedLogin] = useState(!currentUserId);


    const updateUser = (userId) => {
            if (userId) {
              setNeedLogin(false);
              setCurrentUserId(userId);
            } else {
              setCurrentUserId(null);
              setNeedLogin(true);
            }
          };

    const cProps = {
        currentUserId, updateUser
    };

  return (
    <BrowserRouter>
        <NavBar currentUserId={currentUserId} updateUser={updateUser}/>
        <Switch>
            <Route path="/log-in"
                render={props => (
                    <LoginForm {...props}
                    updateUser={updateUser}
                    currentUserId={currentUserId}
                />
                )}
            />
            <Route path="/sign-up">
                <SignupForm />
            </Route>
            <Route exact path="/movies" >
                <MovieContainer />
            </Route>
            <Route path ="/movies/:id" >
                <Movie currentUserId={currentUserId}/>
            </Route>
            <Route path="/">
                <HomePage />
            </Route>

        </Switch>
    </BrowserRouter>
  );
}

export default App;
