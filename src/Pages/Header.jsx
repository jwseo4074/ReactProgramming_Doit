import React from 'react';
import {  Link, Route, BrowserRouter as Router} from 'react-router-dom';


function Header () {
    return (
        <>
                {/* <Link to="/">
                <button>Home</button>
                </Link>   
                   
                <Link to="/03page">
                <button>03</button>
                </Link>
                <Link to="/04">
                <button>04</button>
                </Link>
                <Link to="/05">
                <button>05</button>
                </Link>

                <Link to="/anything">
                <button>anything</button>
                </Link> */}
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/03page">03 Page</Link></li>
            </ul>
            <hr/>
        </>
    )
}
        
export default Header;