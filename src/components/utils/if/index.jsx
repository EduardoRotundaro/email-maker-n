export default props => {
    if(props.cond) return props.children
    return null
}