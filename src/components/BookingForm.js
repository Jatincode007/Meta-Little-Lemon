import React, { useState } from 'react';
import {Link} from 'react-router-dom'



const BookingForm = (props) => {
    const [date, setDate] = useState("")
    const [times, setTimes] = useState("")
    const [guests, setGuests] = useState("")
    const [occasion, setOccasion] = useState("")




    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    }
    const handlechange = (e) => {
        setDate(e)
        props.dispatch(e);

    }
    return (
        <header >
            <section >
                <form onSubmit={handleSubmit} >
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose Date</label>
                            <input
                                type="date"
                                id='book-date'
                                onChange={(e) => handlechange(e.target.value)}
                                value={date} required />
                        </div>

                        <div>
                            <label htmlFor='book-time'>Choose Time</label>
                            <select
                                id="book-time"
                                value={times}
                                onChange={(e) => setTimes(e.target.value)}
                            >
                                <option value="">Select a Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => { return <option key={availableTimes}>{availableTimes}</option> })
                                }
                            </select>
                        </div>

                        <div>
                            <label htmlFor='book-guests'>Number Of Guests</label>
                            <input id='book-guests' min="1" max="100" value={guests} type='number'
                                onChange={(e) => setGuests(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor='book-occasion'>Choose Occasion</label>
                            <select id="book-occasion"
                                key={occasion}
                                onChange={(e) => setOccasion(e.target.value)}
                            >
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>
                        <div className='btnReceive'>

                           <Link to="/confirmed"><input aria-label='On Click' type="button" value={"Make Your Reservation"} /></Link>
                        </div>

                    </fieldset>
                </form>

            </section>
            <section>
                
            </section>

        </header>
    );

};

export default BookingForm;