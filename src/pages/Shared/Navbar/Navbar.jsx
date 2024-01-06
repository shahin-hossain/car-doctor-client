import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {
    const { logOut, user } = useContext(AuthContext);

    const handleLogOut = () => {

        logOut()
            .then(() => {
                console.log('User Logged Out')
            })
            .catch(error => console.log(error))
    }
    // console.log(user)
    // drop down menu & toggle bar menu জন্য nav bar এর items গুলোকে একটা variable এর মধ্যে রাখা হয়েছে।
    const navItems = <>
        <li><Link>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        {
            user?.email ? <><li><Link to={'/bookings'} >My Bookings</Link></li>
                <li><button onClick={handleLogOut} >Logout</button></li>
                <li className='text-orange-600 p-2'>{user && user.displayName}</li></>
                : <li><Link to='/login'>Login</Link></li>
        }


    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                {/* এই nav bar mobile view / toggle bar er জন্য */}
                <div className="dropdown">

                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className=""><img src={logo} alt="" /></Link>
            </div>

            {/* এই nav bar desktop view এর জন্য */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline ">Appointment</a>
            </div>
        </div>
    );
};

export default Navbar;