import React, { Component } from 'react'

/* Styles */
import style from './ButtonLine.module.css'

/* Components and Pages */


export default class ButtonLine extends Component {

    constructor(props) {
        super()
        this.children = props.children
        this.clickButton = props?.clickButton || this.defaultFunction
        this.id = props.id || ''

        this.state = {
            name: this.children
        }
    }

    changeName = async(newElementName) => {
        await this.setState({
            name: newElementName
        })
    }

    defaultFunction(){

    }

    render() {
        return (
            <button id={this.id} className={style.button} onClick={this.clickButton}>
                {this.state.name}
            </button>
        )
    }
}