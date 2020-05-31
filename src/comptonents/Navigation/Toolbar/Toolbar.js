import React from 'react';

import cssClass from './Toolbar.module.css'

import NavigationItems from '../NavigationItems/NavigationItems';
import Toggle from '../SideDrawer/Toggle/Toggle'

const toolbar = (props) => (
    <header className={cssClass.Toolbar}>
        <Toggle clicked={props.toggleClicked} />
        <nav className={cssClass.DesktopOnly}><NavigationItems /></nav>
            
       
        
    </header>
);

export default toolbar