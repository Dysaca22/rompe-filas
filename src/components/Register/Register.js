import React, { Component } from 'react'
import axios from 'axios'

/* Styles */
import style from './Register.module.css'

/* Components and Pages */


export default class Register extends Component {

    constructor(props) {
        super()
        this.changeTitle = props.changeTitle
    }

    signInRequest = (event) => {
        event.preventDefault()
        const data = {
            username: document.querySelector('#user-signIn').value,
            password: document.querySelector('#password-signIn').value,
        }

        axios.post('http://localhost:8000/api/login/', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(async (response) => {
                const { ok } = response.data
                if (ok) {
                    const { access } = response.data
                    document.getElementById('register').classList.add('is-hidden')
                    document.querySelector(`.${style.error}`).classList.add('is-hidden')
                    window.localStorage.setItem("tokenStorage", JSON.stringify(`Bearer ${access}`))
                    document.querySelectorAll('input').forEach(input => {
                        input.value = ''
                    })
                    this.changeTitle('Log Out')
                } else {
                    document.querySelector(`.${style.error}`).classList.remove('is-hidden')
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    signUpRequest = (event) => {
        event.preventDefault()
        const data = {
            name: document.querySelector('#name-signUp').value,
            email: document.querySelector('#email-signUp').value,
            phone: document.querySelector('#phone-signUp').value,
            password: document.querySelector('#password-signUp').value,
            username: document.querySelector('#email-signUp').value,
        }

        axios.post('http://localhost:8000/api/create-user/', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                const { ok } = response.data
                if (ok) {
                    document.getElementById('register').classList.add('is-hidden')
                    document.querySelectorAll('input').forEach(input => {
                        input.value = ''
                        input.style.border = 'none'
                    })
                } else {
                    const { errors } = response.data
                    document.querySelectorAll('input').forEach(input => {
                        input.style.border = 'none'
                    })
                    Object.keys(errors).forEach(key => {
                        if(key !== 'username') {
                            document.querySelector(`#${key}-signUp`).style.border = '1px solid red'
                        }
                    })
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    signUpButtonClick() {
        const container = document.getElementById('container')
        container.classList.add(style.right_panel_active)
    }

    signInButtonClick() {
        const container = document.getElementById('container')
        container.classList.remove(style.right_panel_active)
    }

    hideRegister(event) {
        const target = event.target;
        const register = document.getElementById('register')
        if (target === register) {
            register.classList.add('is-hidden')
        }
    }

    render() {
        return (
            <>
                <div className={`${style.window} is-hidden`} id='register' onClick={this.hideRegister}>
                    <div className={style.body}>
                        <div className={style.container} id="container">
                            <div className={`${style.form_container} ${style.sign_up_container}`}>
                                <form className={style.form} action="/">
                                    <h1 className={style.h1}>Create Account</h1>
                                    <span className={style.span}>or use your email for registration</span>
                                    <br />
                                    <input className={style.input} id='name-signUp' type="text" placeholder="Name" />
                                    <input className={style.input} id='email-signUp' type="email" placeholder="Email" />
                                    <input className={style.input} id='phone-signUp' type="text" placeholder="Phone" />
                                    <input className={style.input} id='password-signUp' type="password" placeholder="Password" />
                                    <button onClick={this.signUpRequest} className={style.button}>Sign Up</button>
                                </form>
                            </div>
                            <div className={`${style.form_container} ${style.sign_in_container}`}>
                                <form className={style.form} action="/">
                                    <h1 className={style.h1}>Sign in</h1>
                                    <span className={style.span}>or use your account</span>
                                    <br />
                                    <input className={style.input} id='user-signIn' type="text" placeholder="Username" />
                                    <input className={style.input} id='password-signIn' type="password" placeholder="Password" />
                                    <span className={`${style.error} is-hidden`}>Incorrect username or password, try again.</span>
                                    <button onClick={this.signInRequest} className={style.button}>Sign In</button>
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
                </div>
            </>
        )
    }
}