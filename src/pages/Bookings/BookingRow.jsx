import React from 'react';

const BookingRow = ({ booking }) => {
    console.log(booking)
    const { img, customerName, email, date, service, price } = booking;
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-24 h-24">
                        {img && <img src={img} alt="" />}
                    </div>
                </div>
            </td>
            <td>
                {service}
            </td>
            <td>{date}</td>
            <td>${price}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default BookingRow;