import React, { Component } from 'react'

/* Styles */
import './Bell.css'

/* Components and Pages */

/* Icons */
import { IconBellFilled } from '@tabler/icons-react'


export class Bell extends Component {

    constructor(props) {
        super()
        this.clickButton = props?.clickButton || this.defaultFunction   
    }

    defaultFunction(){

    }

    render() {
        return (
            <>
                <span onClick={this.clickButton}>
                    <IconBellFilled id='bell' style={{marginRight: '5px', cursor: 'pointer'}} />
                </span>
            </>
        )
    }
}

export default Bell