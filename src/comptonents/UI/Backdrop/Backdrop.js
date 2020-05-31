import React from 'react';

import cssClass from './Backdrop.module.css'

const backdrop = (props) => (
    props.show ? <div className={cssClass.Backdrop} onClick={props.clicked}></div> : null
)

export default backdrop