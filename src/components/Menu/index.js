import React from 'react';

import Logo from '../../assets/image/logo.png';
import './Menu.css';

import Button from '../Button';

function Menu(){
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Devflix logo"/>
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo video
            </Button>
        </nav>
    );
}

export default Menu;
