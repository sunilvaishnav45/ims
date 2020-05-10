
import React from 'react';
import LoginService from './LoginService';
import Cookies from 'universal-cookie';



class LogoutService extends React.Component {

    constructor() {
        super()
        this.loginService = new LoginService();
        this.cookies = new Cookies();
        this.REACT_APP_ROOT_CONTEXT = process.env.REACT_APP_ROOT_CONTEXT;
        this.loginPageUrl = this.REACT_APP_ROOT_CONTEXT+"/#/login"
    }

    logout = () => {
        this.removeToken();
        window.location.href = this.loginPageUrl;
        window.location.reload();
    }

    removeToken = () => {
        this.cookies.remove(this.loginService.getLoginTokenKey());
    }
}

export default LogoutService;