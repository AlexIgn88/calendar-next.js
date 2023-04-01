import { useState } from 'react'
import Tbody from '../components/Tbody'

function Calendar() {
    const
        today = new Date(),
        [inputValue, setInputValue] = useState([today.getFullYear(), String(today.getMonth() + 1).padStart(2, '0')].join('-')),
        [year, month] = inputValue.split('-');

    return <div className="calendar">
        <input
            id='month-input'
            type="month"
            value={inputValue}
            onChange={evt => setInputValue(evt.target.value)}
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