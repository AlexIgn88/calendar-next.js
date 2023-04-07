import { useState } from 'react'

function ModalWindow({ setShowModalWindow, date, setDate, TableForCalendar }) {
    const
        [day, month, year] = date.split('.'),
        [inputYearValue, setinputYearValue] = useState(year);

    function getMonth(evt) {
        const td = evt.target.closest('td');
        if (!td) return
        setDate(day + '.' + evt.target.dataset?.month + '.' + inputYearValue);
    }

    function ArrayOfTD(startShift) {
        const
            result = [],
            arrayOfMonths = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];

        for (let i = 0; i < 4; i++) {
            let
                td = <td key={Date.now() + i}></td>,
                nameOfMonth = arrayOfMonths[i + startShift];
            td = <td key={Date.now() + i} data-month={'' + 0 + (i + startShift + 1)} >{nameOfMonth}</td>;
            if (i + startShift + 1 == month) td = <td key={Date.now() + i} data-month={'' + 0 + (i + startShift + 1)} className="current" >{nameOfMonth}</td>;
            result.push(td);
        }
        return result;
    }

    function ArrayOfTR() {
        const
            result = [];
        for (let i = 0, startShift = 0; i < 3; i++) {
            const
                tr = <tr key={Date.now() + i}>{...ArrayOfTD(startShift)}</tr>
            result.push(tr);
            startShift += 4;
        }
        return result;
    }

    return <div className="modal-window">
        <div>
            <div className='closeButton'><button onClick={() => setShowModalWindow(false)}>Close</button></div>
            <span className='description'>Выберите год: </span>
            <input
                type='number'
                value={inputYearValue}
                onChange={
                    evt => {
                        setinputYearValue(evt.target.value);
                        setDate(date.split('.')[0] + '.' + date.split('.')[1] + '.' + inputYearValue);
                    }}
            />
        </div>
        <table><tbody onClick={evt => getMonth(evt)}>{...ArrayOfTR()}</tbody></table>
        {TableForCalendar}
    </div>
}

export default ModalWindow