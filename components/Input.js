function Input({ inputValue, setInputValue }) {

    return <input
        id='month-input'
        type="month"
        value={inputValue}
        onChange={evt => setInputValue(evt.target.value)}
    />
}

export default Input;