import React from 'react';
import { MenuItems } from "./MenuItems"
import './Navbar.css'

class Navbar extends React.Component {
    state = { clicked: false }



    render() {
        return(
            <nav className="NavbarItems">
                <h1>
                    <a className="navbar-logo" href='/'> 
                        David Björelind
                    </a>
                </h1>
                <div className="menu-icon" onClick={this.handleClick}>

                </div>
                <ul className = "nav-menu">
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className = {item.cName} href={item.url}> 
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                    
                </ul>
            </nav>
        )
    }
}

export default Navbar