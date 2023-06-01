import React, { Component } from 'react'

/* Styles */
import style from './Home.module.css'

/* Components and Pages */
import Navbar from '../../components/Navbar'
import Cube from '../../components/Cube'


export default class Home extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className={style.container}>
                    <div className={style.title_subtitle}>
                        <h1 className={style.title}>Home</h1>
                        <p className={style.objective}>Break lines to solve a problem with the long lines that form in its different branches of the company R.A.W.R</p>
                    </div>
                    <section className={style.section}>
                        <Cube />
                    </section>
                </div>
            </>
        )
    }
}