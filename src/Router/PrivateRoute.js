import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import LoginService from '../Services/LoginService';

var loginService = new LoginService()
var REACT_APP_ROOT_CONTEXT = process.env.REACT_APP_ROOT_CONTEXT;
var loginPageUrl = REACT_APP_ROOT_CONTEXT+"/#/login"

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            loginService.isUserLoggedIn() ?
                <Component {...props} />
            : <Redirect to={loginPageUrl} />
        )} />
    );
};

export default PrivateRoute;