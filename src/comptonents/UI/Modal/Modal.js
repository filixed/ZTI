import React from 'react'

import cssClass from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
import Auxil from '../../../hoc/Auxilary'

const modal = (props) => (
    <Auxil>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
    <div className={cssClass.Modal}
    style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1': '0'
    }}
    >
        {props.children}
    </div>
    </Auxil>
)

export default modal;