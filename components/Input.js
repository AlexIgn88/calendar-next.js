import { useState } from 'react'
import ModalWindow from '../components/ModalWindow'

function Input({ inputValue, setInputValue }) {
    const [showModalWindow, setShowModalWindow] = useState(false);

    const date = new Date(inputValue);
    const options = { year: 'numeric', month: 'long' };
    const formattedDate = date.toLocaleString('ru-RU', options)
        .charAt(0).toUpperCase() + date.toLocaleString('ru-RU', { year: 'numeric', month: 'long' })
            .slice(1)
    console.log(formattedDate); // "April 2023"

    //let currentDate = new Date(inputValue).toLocaleString();
    //console.log('Input- ', currentDate);

    //let currentDate2 = new Date(inputValue).toLocaleString('en-US', { year: 'numeric', month: 'long' });

    return (
        <>
            {/*<input
                id='month-input'
                type="month"
                value={inputValue}
                onChange={evt => setInputValue(evt.target.value)}
            />*/}

            <div suppressHydrationWarning>{formattedDate}</div>
            <button onClick={() => setShowModalWindow(true)}>Установить дату</button>
            {showModalWindow && <ModalWindow
                setShowModalWindow={setShowModalWindow}
                inputValue={inputValue}
                setInputValue={setInputValue}
            />}
        </>
    );
}

export default Input;