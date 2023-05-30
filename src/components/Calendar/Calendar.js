import React, { useState } from 'react';
import CalendarComponent from 'react-calendar';

/* Styles */
import style from './Calendar.module.css';
import './Calendar.css'
//import 'react-calendar/dist/Calendar.css';

const MyCalendar = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div className={style.calendar}>
            <h3 className='text-center'>Selecciona una fiesta</h3>
            <div className={style.calendar_container}>
                <CalendarComponent onChange={setDate} value={date} />
            </div>
            <p className='text-center'>
                <span className='bold'>Selected Date:</span>{' '}
                {date.toDateString()}
            </p>
        </div>
    );
}

export default MyCalendar;
