import React, { Component } from 'react';
import style from './Notification.module.css';

export default class Notification extends Component {
  render() {
    return (
      <>
        <div className={style.notification}>
          <p>Cita asignada: {this.props.bookingDate}  a las {this.props.bookingTime}</p>
          <span className={style.notification_progress}></span>
        </div>
      </>
    );
  }
}
