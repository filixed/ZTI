
import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems'
import cssClass from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Auxil from '../../../hoc/Auxilary'

const sideDrawer = (props) => {

    let arraClass = [cssClass.SideDrawer, cssClass.Close]
    if(props.open) {
        arraClass = [cssClass.SideDrawer, cssClass.Open]
    }

    return (
        <Auxil>
            <Backdrop show={props.open} clicked={props.closed}></Backdrop>
            <div className={arraClass.join(' ')} >
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxil>
    );
}

export default sideDrawer;