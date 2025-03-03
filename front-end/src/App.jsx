import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import Register from './pages/Register';

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
        </div>
    )
}
export default App;