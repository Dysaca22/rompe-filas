import React, { Component } from 'react'

/* Styles */
import style from './ButtonLine.module.css'

/* Components and Pages */


export default class ButtonLine extends Component {

    constructor(props) {
        super()
        this.children = props.children
    }

    render() {
        return (
            <button className={style.btn}>
                {this.children}
            </button>
        )
    }
}