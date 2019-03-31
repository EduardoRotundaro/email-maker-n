import React from 'react'

export default props => (
    <button type="button" className={` btn ${props.size ? ('btn-' + props.size): ''} btn-${props.style}`} onClick={props.onClick}>
        {props.text}
    </button>
)