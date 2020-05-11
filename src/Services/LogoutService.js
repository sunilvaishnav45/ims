
import React from 'react';
import LoginService from './LoginService';
import Cookies from 'universal-cookie';

class LogoutService extends React.Component {

    constructor() {
        super()
        this.loginService = new LoginService();
        this.cookies = new Cookies();
        this.REACT_APP_ROOT_URL = process.env.REACT_APP_ROOT_URL;
    }

    logout = () => {
        this.removeToken();
        let loginURL = this.REACT_APP_ROOT_URL+"#/login";
        window.location.href = loginURL;
        alert(loginURL)
        window.location.reload();
    }

    removeToken = () => {
        this.cookies.remove(this.loginService.getLoginTokenKey());
    }
}

export default LogoutService;