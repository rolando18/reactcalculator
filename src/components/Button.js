const Button = ({ text, onClick }) => {
    return (
        <button onClick={onClick} value={text} className={text === '=' ? 'btn eq' : 'btn'}>{text}</button>
    )
}

export default Button