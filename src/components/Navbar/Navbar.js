import React, { Component } from 'react';
import { MenuItems } from './MenuItems'
import  NavTogglerOpen from '../../assets/toggler-icon.png'
import  NavTogglerClose from '../../assets/close.png'
import './Navbar.css'
import { Button } from '../Button';

class Navbar extends Component {
    state = { clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    
    render() {
        return (
            <nav className="NavbarItem">
                <h1 className="NavbarLogo">NISSA</h1>
                <div className="MenuIcon" onClick={this.handleClick}>
                    { this.state.clicked ?
                        <img src={NavTogglerClose} alt="" /> : <img src={NavTogglerOpen} alt="" /> 
                    }
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {
                        MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
                <Button>Sign Up</Button>
            </nav>
        )
    }
}

export default Navbar