import React from 'react';

function Navbar(props) {
    return (
        <div className='navbar'>
            <ul className='navbar-links'>
                <li className='navbar-element' href="/">Home</li>
                <li className='navbar-element' href="/about">About</li>
                <li className='navbar-element' href="/users">Users</li>
            </ul>
        </div>
    );
}

export default Navbar;