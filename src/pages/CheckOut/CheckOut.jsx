import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const CheckOut = () => {
    const service = useLoaderData();
    const { _id, service_id, title, price, img } = service;
    const { user } = useContext(AuthContext);


    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;

        const booking = {
            customerName: name,
            date,
            email,
            service: title,
            service_id: service_id,
            price,
            img
        }
        //send bookings data to server & database
        fetch(`http://localhost:5000/bookings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    alert('Service Booking Successfully')
                }
            })
    }
    return (
        <div>
            <h2 className='text-center text-3xl'>Book Service: {title} </h2>

            <form onSubmit={handleBookService} className="card-body">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Enter Name" name='name' defaultValue={user?.displayName} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name='date' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" defaultValue={'$' + price} className="input input-bordered" required />
                    </div>

                </div>
                <div className="form-control mt-6">
                    <input className="btn bg-orange-500 hover:bg-orange-600 text-white" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;