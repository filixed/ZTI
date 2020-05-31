import React from 'react'

import cssClass from './Sandwitch.module.css';

import SandwitchIngridient from './SandwitchIngridient/SandwitchIngridient'

const sandwitch = (props) => {

    let ingridientTransform = Object.keys(props.ingridients)
    .map( igKey => {
        return [...Array(props.ingridients[igKey] )].map(( _, i) => {
            return <SandwitchIngridient key={igKey +i} type={igKey} />
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if (ingridientTransform.length === 0) {
        ingridientTransform = <p>Dodaj skladniki</p>
    }
    return (
        <div className={cssClass.Sandwitch}>
            <SandwitchIngridient type="bread-bottom" />
            {ingridientTransform}
            <SandwitchIngridient type="bread-bottom" />
        </div>
    )
}

export default sandwitch