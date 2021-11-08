import React, { Component } from 'react';
import './navbar.css';
// import './App.css';


class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <h1>DAYS</h1>
                    <ul>
                        <li> HOME </li>
                        <li> ADD DAYS </li>
                        <li> PROFILE </li>

                    </ul>
                </nav>

            </div>
        );
    }
}

export default Navbar;
