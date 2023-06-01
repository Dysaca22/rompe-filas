import React, { Component } from 'react';

/* Styles */
import style from './Notification.module.css';

/* Components and Pages */


export default class Notification extends Component {

    constructor(props) {
        super()
        this.text = props.text
    }

    render() {
        return (
            <>
                <div className={style.notification}>
                    <p>{this.text}</p>
                    <span className={style.notification_progress}></span>
                </div>
            </>
        );
    }
}