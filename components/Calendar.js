import { useState } from 'react'
import ModalWindow from '../components/ModalWindow'
import TableForCalendar from '../components/TableForCalendar'
import Image from 'next/image'

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
            <Image src="/ico.png" alt="calendar" width="50" height="50" />
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