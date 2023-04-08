import { useState } from 'react'
import ModalWindow from '../components/ModalWindow'
import TableForCalendar from '../components/TableForCalendar'

function Calendar() {
    const
        today = new Date(),
        [showModalWindow, setShowModalWindow] = useState(false),
        [date, setDate] = useState([
            String(today.getDate()).padStart(2, '0'),
            String(today.getMonth() + 1).padStart(2, '0'),
            today.getFullYear()]
            .join('.'));

    return <div className="calendar" onClick={
        evt => { if (showModalWindow && !evt.target.closest('.modal-window')) setShowModalWindow(false) }
    }>
        <div>{date}</div>
        <button onClick={() => setShowModalWindow(true)} className='button-for-set-date' >
            Установить дату
            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Oxygen480-actions-view-calendar.svg/1200px-Oxygen480-actions-view-calendar.svg.png" /> */}
        </button>
        {showModalWindow && <ModalWindow
            setShowModalWindow={setShowModalWindow}
            date={date}
            setDate={setDate}
            TableForCalendar={<TableForCalendar date={date} setDate={setDate} />}
        />}
    </div>
}

export default Calendar