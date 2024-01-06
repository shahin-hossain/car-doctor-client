import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingRow from './BookingRow';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    //server এ Query email দিয়ে  data fetch হয়েছে।
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    // console.log(bookings)
    const handleDelete = id => {
        const proceed = confirm('Are Your Sure to Delete');
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Delete Successfully')
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining)
                    }
                })
        }
    }
    return (
        <div>
            <h3>Your Bookings: {bookings.length}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Services</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {bookings.map(booking => <BookingRow
                            key={booking._id}
                            booking={booking}
                            handleDelete={handleDelete}
                        ></BookingRow>)}
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Bookings;