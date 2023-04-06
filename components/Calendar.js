import { useState } from 'react'
import ModalWindow from '../components/ModalWindow'
import Tbody from '../components/Tbody'

function Calendar() {
    const
        today = new Date(),
        [showModalWindow, setShowModalWindow] = useState(false),
        [yearAndMonth, setYearAndMonth] = useState([today.getFullYear(), String(today.getMonth() + 1).padStart(2, '0')].join('-')),
        [year, month] = yearAndMonth.split('-'),

        date = new Date(yearAndMonth),
        options = { year: 'numeric', month: 'long' },
        formattedDate = date.toLocaleString('ru-RU', options)
            .charAt(0).toUpperCase() + date.toLocaleString('ru-RU', options).slice(1);

    return <div className="calendar">
        <div suppressHydrationWarning>{formattedDate}</div>
        <button onClick={() => setShowModalWindow(true)}>Установить дату</button>
        {showModalWindow && <ModalWindow
            setShowModalWindow={setShowModalWindow}
            yearAndMonth={yearAndMonth}
            setYearAndMonth={setYearAndMonth}
        />}
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
            {yearAndMonth && <Tbody year={year} month={month - 1} />}
        </table>
    </div>
}

export default Calendar