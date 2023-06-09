import { Calendar } from "@progress/kendo-react-dateinputs"
import { useEffect, useRef, useState } from "react"
import axios from "axios"

/* Styles */
import style from './Calendar.module.css'
import '@progress/kendo-theme-default/dist/all.css'
import './Calendar.css'

/* Components and Pages */
import Notification from '../../components/Notification'


const times = [
    "08:00 - 10:00",
    "10:00 - 12:00",
    "12:00 - 14:00",
    "14:00 - 16:00",
    "16:00 - 18:00",
    "18:00 - 20:00",
];

const getRandomNumInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

const pickSlotTimes = times => {
    // Get a random number that will indicate how many time slots we pick
    const timesToPick = getRandomNumInRange(0, times.length);

    // If the random picked is the maximum possible then return all times
    if (timesToPick === times.length - 1) {
        return times;
    }

    let timesPicked = [];

    // Loop until we have picked specified number of times
    while (timesToPick !== timesPicked.length - 1) {
        // Get a new index and time
        const index = getRandomNumInRange(0, times.length);
        const selectedTime = times[index];
        // If we already picked that time we continue
        // as we don't want duplicated
        if (timesPicked.includes(selectedTime)) continue;
        // Keep the time
        timesPicked.push(selectedTime);
    }

    // We need to sort the times, as they may not be in correct order
    return timesPicked.sort();
};


const TheCalendar = props => {
    const [bookingDate, setBookingDate] = useState(null);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
    const [bookingTimes, setBookingTimes] = useState([]);
    const timeSlotCacheRef = useRef(new Map());

    const fun = props.fun;

    const dateString = (date) => {
        let textDate = new Date(date)
        textDate.setDate(textDate.getDate())
        const newDate = textDate.toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
        return newDate
    }

    useEffect(() => {
        // Bail out if there is no date selected
        if (!bookingDate) return;

        // Get time slots from cache
        let newBookingTimes = timeSlotCacheRef.current.get(
            bookingDate.toDateString()
        );

        // If we have no cached time slots then pick new ones
        if (!newBookingTimes) {
            newBookingTimes = pickSlotTimes(times);
            // Update cache with new time slots for the selected date
            timeSlotCacheRef.current.set(bookingDate.toDateString(), newBookingTimes);
        }

        setBookingTimes(newBookingTimes);
    }, [bookingDate]);

    const onDateChange = e => {
        setSelectedTimeSlot(null);
        setBookingDate(e.value);
    };

    const onTimeSlotClick = (time) => {
        setSelectedTimeSlot(time);

        // Delete the time selected in the cache
        const cachedBookingTimes = timeSlotCacheRef.current.get(
            bookingDate.toDateString()
        );
        const newBookingTimes = cachedBookingTimes.filter((bookingTime) => bookingTime !== time);
        timeSlotCacheRef.current.set(bookingDate.toDateString(), newBookingTimes);

        setBookingTimes([]);

        const year = bookingDate.getFullYear();
        const month = String(bookingDate.getMonth() + 1).padStart(2, '0');
        const day = String(bookingDate.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;

        const data = {
            'date': formattedDate,
            'time': time
        }

        const tokenStorage = JSON.parse(localStorage.getItem('tokenStorage')) || ''

        axios.post('http://localhost:8000/api/turn/', data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenStorage}`
            }
        })
            .then((response) => {
                const { ok } = response.data
                if (ok) {
                    fun([formattedDate, `${time}`, response.data.id])
                } else {
                    console.log(response)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    };

    return (
        <div className="k-my-8">
            <div className="k-flex k-display-flex k-mb-4 container_calendar">
                <Calendar value={bookingDate} onChange={onDateChange} />
                <div className="k-ml-4 k-display-flex k-flex-col">
                    {bookingTimes.map(time => {
                        return (
                            <button
                                key={time}
                                className={style.buttons}
                                onClick={() => onTimeSlotClick(time)}
                            >
                                {time}
                            </button>
                        );
                    })}
                </div>
            </div>

            {bookingDate && selectedTimeSlot ? (
                <div>
                    <div>
                        <Notification text={`Assigned appointment: ${dateString(bookingDate)} at ${selectedTimeSlot}`} />
                    </div>
                </div>
            ) : ''}
        </div>
    );

};

export default TheCalendar;