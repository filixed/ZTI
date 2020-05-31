import React from "react"

import cssClass from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salata', type: 'salata'},
    {label: 'Szynka', type: 'szynka'},
    {label: 'Ser', type: 'ser'},
]

const buildControls = (props) => (

    <div className={cssClass.BuildControls}>
        <p>Cena: <strong>{props.price}</strong> zł</p>
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label} label={ctrl.label} 
            add={ () =>  props.ingridientAdd(ctrl.type)}
            remove= {() =>  props.ingridientRem(ctrl.type)}
            disable={props.disabled[ctrl.type]} 
            />

        ))}
        <button className={cssClass.OrderButton} disabled={!props.purchable}
        onClick={props.order}>
             Zamów </button>
    </div>
);

export default buildControls;