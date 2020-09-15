import React from 'react';
import {Redirect} from 'react-router-dom';

const SecretPage = ({isLoggedIn}) => {
    if (isLoggedIn) {
        return (<div><h1>It is secret Page</h1></div>);
    }
    return <Redirect to="/login"/>;
}
export default SecretPage;