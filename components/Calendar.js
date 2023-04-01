import { useState } from 'react'

function Calendar() {
    const
        today = new Date();
    //     monthInput = document.getElementById('month-input'),
    //     table = document.querySelector('table.table-for-calendar'),  

    const
        [inputValue, setInputValue] = useState([today.getFullYear(), String(today.getMonth() + 1).padStart(2, '0')].join('-'));

    const [year, month] = inputValue.split('-');


    console.log('inputValue ', inputValue);
    console.log('inputValue.split ', inputValue.split('-'));
    console.log('[year, month] =  ', year, month);

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
            <tbody></tbody>
        </table>
    </div>
}

export default Calendar