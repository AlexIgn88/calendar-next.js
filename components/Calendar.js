import { useState } from 'react'
import Input from '../components/Input'
import Tbody from '../components/Tbody'

function Calendar() {
    const
        today = new Date(),
        [inputValue, setInputValue] = useState([today.getFullYear(), String(today.getMonth() + 1).padStart(2, '0')].join('-')),
        [year, month] = inputValue.split('-');

    return <div className="calendar">
        <Input 
        inputValue={inputValue} 
        setInputValue={setInputValue}
        />
        <table className="table-for-calendar">
            <thead>
                <tr>
                    <td>Пн</td>
                    <td>Вт</td>
                    <td>Ср</td>
                    <td>Чт</td>
                    <td>Пт</td>
                    <td>Сб</td>
                    <td>Вс</td>
                </tr>
            </thead>
            {inputValue && <Tbody year={year} month={month - 1} />}
        </table>
    </div>
}

export default Calendar