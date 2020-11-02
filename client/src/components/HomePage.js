import React from 'react';
import { Redirect } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <Redirect to="/movies" />
        </div>
    )
}


export default HomePage
