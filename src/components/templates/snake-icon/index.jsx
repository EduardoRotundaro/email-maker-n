import React from 'react'

export default props => (
    <li className="snake-icon">
        <a href={props.link}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img src={ props.imgSrc }></img>
        </a>
    </li>
)