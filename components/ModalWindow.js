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
            td = <td key={Date.now() + i} data-month={String(i + startShift + 1).padStart(2, '0')} className={
                i + startShift + 1 === +month ? 'current' : ''
            }>{nameOfMonth}</td>;
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
            <div className='closeButton'>
                <button onClick={() => {
                    setDate([
                        String(new Date().getDate()).padStart(2, '0'),
                        String(new Date().getMonth() + 1).padStart(2, '0'),
                        new Date().getFullYear()]
                        .join('.'));
                    setShowModalWindow(false);
                }}>Reset date</button>
                <button onClick={() => setShowModalWindow(false)}>Close</button>
            </div>
            <span className='description'>Выберите год: </span>
            <input
                type='number'
                value={inputYearValue}
                onChange={
                    evt => {
                        setinputYearValue(evt.target.value);
                        setDate(day + '.' + month + '.' + evt.target.value);
                    }}
            />
        </div>
        <table><tbody onClick={evt => getMonth(evt)}>{...ArrayOfTR()}</tbody></table>
        {TableForCalendar}
    </div>
}

export default ModalWindow