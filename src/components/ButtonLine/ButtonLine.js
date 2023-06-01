import React, { Component } from 'react'

/* Styles */
import style from './ButtonLine.module.css'

/* Components and Pages */


export default class ButtonLine extends Component {

    constructor(props) {
        super()
        this.children = props.children
        this.function = props.function || {}
    }

    render() {
        return (
            <button className={style.button} onClick={this.function}>
                {this.children}
            </button>
        )
    }
}