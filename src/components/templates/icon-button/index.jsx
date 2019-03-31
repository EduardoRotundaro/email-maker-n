import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default props => (
    <button type="button" className={` btn ${props.size ? ('btn-' + props.size): ''} btn-${props.style}`} onClick={props.onClick}>
        <i><FontAwesomeIcon icon={props.icon}></FontAwesomeIcon></i>
    </button>
)