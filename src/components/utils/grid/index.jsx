import React from 'react'

export default props => {

    function getClasses(){
        let cols = props.cols ? props.cols.split('-') : []
        return `col-${cols[0]} col-sm-${cols[1]} col-md-${cols[2]} col-lg-${cols[3]} col-xl-${cols[4]}` 
    }

    return <div className={getClasses()}>{props.children}</div>
}