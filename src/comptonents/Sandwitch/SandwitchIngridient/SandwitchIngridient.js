import React from 'react';
import propTypes from 'prop-types';

import cssClass from './SandwitchIngridient.module.css'

const sandwitchIngridient = (props) => {
    let ingrident = null;
    
    switch(props.type){
        case ('bread-bottom'):
            ingrident = <div className={cssClass.BreadBottom}></div>
            break;
        
        case ('szynka'):
            ingrident = <div className={cssClass.Szynka}></div>;
            break;           
        
        case ('ser'):
            ingrident = <div className={cssClass.Ser}></div>
            break;

        case ( 'salata'):
            ingrident = <div className={cssClass.Salata}></div>
            break;
        
        default:
            ingrident=null;
        
        
    }
    return ingrident;

}

sandwitchIngridient.propTypes = {
    type: propTypes.string.isRequired
}

export default sandwitchIngridient;