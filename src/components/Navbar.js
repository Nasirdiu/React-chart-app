import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar'>
             <span className="logo">Lama Chat</span>
             <div className="user">
                <img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt="" />
                <span>john</span>
                <button>logout</button>
             </div>
        </div>
    );
};

export default Navbar;