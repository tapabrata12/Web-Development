const Button = (props) => {

    function handleClick() {
        props.setParagraph("now changed by the button")
    }
    return (
        <button onClick={handleClick}>Click to change the paragraph</button>
    )
}

export default Button