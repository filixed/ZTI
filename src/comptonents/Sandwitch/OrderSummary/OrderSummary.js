import React from 'react';

import Auxil from '../../../hoc/Auxilary'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {

    const inSummary = Object.keys(props.ingredients)
        .map(igKey => {
        return <li key={igKey}><span style ={{textTransform:'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]} </li>
        })

    return(
        <Auxil>
            <h2>Twoje zamowienie: </h2>
            <ul>
                {inSummary}
            </ul>
            <p>Cena: {props.price}</p>
            <Button btnType="Danger" clicked={props.purchaseCencel} >Anuluj</Button>
            <Button btnType="Success" clicked={props.purchaseContinue} >Continue</Button>
        </Auxil>
    )
}

export default orderSummary;