import React from 'react';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

const Header = (props) => {
   
    let icon = props.mode === 'Light' ? <Brightness7Icon /> : <Brightness4Icon />; 

    return (
        <header>
            <h3 className="logo">Where in the world?</h3>
            <div className="mode-toggle-btn" onClick={props.onClick}>
                {/* <img src={props.icon} alt="" className='switch-icon' /> */}
                {icon}
                <p className='mode'>{props.mode} Mode</p>
            </div>
        </header>
    )
}

export default Header;