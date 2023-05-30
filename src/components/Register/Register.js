import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

/* Styles */
import style from './Register.module.css'

/* Components and Pages */


export default class Register extends Component {

    constructor(props) {
        super()
    }

    signUpButtonClick() {
        const container = document.getElementById('container');
        container.classList.add(style.right_panel_active);
    }

    signInButtonClick() {
        const container = document.getElementById('container');
        container.classList.remove(style.right_panel_active);
    }

    render() {
        return (
            <>
                <div className={style.body}>
                    <div className={style.container} id="container">
                        <div className={`${style.form_container} ${style.sign_up_container}`}>
                            <form className={style.form} action="/">
                                <h1 className={style.h1}>Create Account</h1>
                                <span className={style.span}>or use your email for registration</span>
                                <br />
                                <input className={style.input} type="text" placeholder="Name" />
                                <input className={style.input} type="email" placeholder="Email" />
                                <input className={style.input} type="password" placeholder="Password" />
                                <button className={style.button}>Sign Up</button>
                            </form>
                        </div>
                        <div className={`${style.form_container} ${style.sign_in_container}`}>
                            <form className={style.form} action="/">
                                <h1 className={style.h1}>Sign in</h1>
                                <span className={style.span}>or use your account</span>
                                <br />
                                <input className={style.input} type="email" placeholder="Email" />
                                <input className={style.input} type="password" placeholder="Password" />
                                <a className={style.a} href="/">Forgot your password?</a>
                                <button className={style.button}>Sign In</button>
                            </form>
                        </div>
                        <div className={style.overlay_container}>
                            <div className={style.overlay}>
                                <div className={`${style.overlay_panel} ${style.overlay_left}`}>
                                    <h1 className={style.h1}>Welcome Back!</h1>
                                    <p className={style.p}>To keep connected with us please login with your personal info</p>
                                    <button className={`${style.ghost} ${style.button}`} id="signIn" onClick={this.signInButtonClick}>Sign In</button>
                                </div>
                                <div className={`${style.overlay_panel} ${style.overlay_right}`}>
                                    <h1 className={style.h1}>Hello, Friend!</h1>
                                    <p className={style.p}>Enter your personal details and start journey with us</p>
                                    <button className={`${style.ghost} ${style.button}`} id="signUp" onClick={this.signUpButtonClick}>Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}