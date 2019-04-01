import React, { Component } from 'react'

import loginLogo from '../../../assets/images/logo_b.png'

export default class Login extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div class="login-body">
                <div class="login-transparent-box">
                    <img src={loginLogo} class="login-circle-logo" alt=""></img>
                    <h2 class="login-title">Fazer Login</h2>
                    <form>
                        <p>E-mail</p>
                        <input type="text" placeholder="Insira o e-mail"></input>
                        <p>Password</p>
                        <input type="password" placeholder="......"></input>
                        <input type="submit" value="Entrar"></input>
                        <a href="#">Esqueceu sua senha?</a>
                    </form>
                </div>
            </div>
        )
    }
}