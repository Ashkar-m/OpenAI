import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    return (
        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />

            <Register/>
            <Home />
        </div>
    )
}
export default App;