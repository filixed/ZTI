import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import cssClass from './NavigationItems.module.css';

const navigationItems  = () => (
    <ul className={cssClass.NavigationItems}>
        <NavigationItem link="/">Stwórz Kanapke</NavigationItem>
        <NavigationItem link="/"> Wykup </NavigationItem>
    </ul>
)

export default navigationItems;