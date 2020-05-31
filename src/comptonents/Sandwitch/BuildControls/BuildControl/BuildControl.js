import React from 'react';

import cssClass from './BuildControl.module.css';


const buildControl = (props) => (
    <div className={cssClass.BuildControl}>
        <div className={cssClass.Label}>{props.label}</div>
        <button className={cssClass.Less} 
        onClick={props.remove}
         disabled={props.disable}
        >Mniej</button>
        <button className={cssClass.More} onClick={props.add}>Więcej</button>
    </div>
)

export default buildControl;