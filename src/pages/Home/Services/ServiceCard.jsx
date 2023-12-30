import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body placeholder:text-center">
                <h2 className="card-title">{title}</h2>
                <div className='flex items-center'>
                    <p className='text-xl font-bold text-orange-500'>${price}</p>
                    <Link to={`/checkout/${_id}`} className="card-actions">
                        <button className="btn text-orange-600">Book Now<FaArrowRight /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;