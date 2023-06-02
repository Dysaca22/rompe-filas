import React, { Component } from 'react'

/* Styles */
import style from './Qualify.module.css'

/* Components and Pages */


export class Qualify extends Component {

    constructor(props) {
        super()
        this.header = props.header || []
        this.content = props.content || []

        this.state = {
            header: this.header,
            content: this.content
        }
    }

    render() {
        return (
            <>

            </>
        )
    }
}

export default Qualify