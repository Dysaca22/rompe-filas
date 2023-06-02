import React, { Component } from 'react'
import axios from 'axios'

/* Styles */
import style from './NotificationBoard.module.css'

/* Components and Pages */

/* Icons */
import { IconX } from '@tabler/icons-react';


export class NotificationBoard extends Component {

    constructor(props) {
        super()
        this.state = {
            dates: [],
            notifications: []
        }
        this.getNotifications()
        this.sw = true
    }

    dateString = (date) => {
        let textDate = new Date(date)
        textDate.setDate(textDate.getDate())
        const newDate = textDate.toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit' })
        return newDate
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.dates !== this.state.dates) {
            if (this.sw) {
                setInterval(this.searchNotification, 60000)
                this.searchNotification()
            }
        }

        if (prevState.notifications !== this.state.notifications) {
            const bell = document.getElementById('bell')
            bell.classList.add('bell')
        }
    }

    getNotifications = async () => {
        const tokenStorage = JSON.parse(localStorage.getItem('tokenStorage')) || ''

        await axios.get('http://localhost:8000/api/turn/', {
            headers: {
                'Authorization': `Bearer ${tokenStorage}`
            }
        })
            .then((response) => {
                const data = response.data.map(obj => [obj['date'], obj['time']])
                this.setState({
                    dates: data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    searchNotification = () => {
        this.sw = false
        let dates = []
        this.state.dates.forEach(element => {
            let date = new Date(element[0])
            date.setHours(0, 0, 0, 0)

            if (date <= Date.now()) {
                date.setDate(date.getDate() + 1)
                date.setHours(element[1].substring(0, 2), 0, 0, 0)
                dates = [...dates, date]
            }
        })

        this.setState({
            notifications: dates
        })
    }

    hideNotification(event) {
        const target = event.target;
        const notificationBoard = document.getElementById('notificationBoard')
        const buttonX = document.getElementById('buttonX')
        const icon = buttonX.firstChild
        if (target === notificationBoard || target === buttonX || target === icon) {
            notificationBoard.classList.add('is-hidden')
        }
    }

    render() {
        return (
            <>
                <div id='notificationBoard' className={`${style.window} is-hidden`} onClick={this.hideNotification}>
                    <div className={style.body}>
                        <div className={style.container}>
                            {
                                this.state.notifications.map((element, index) => (<p className={style.p} key={index}>{this.dateString(element)}</p>))
                            }
                            <span id='buttonX' onClick={this.hideNotification} className={style.x}><IconX /></span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NotificationBoard