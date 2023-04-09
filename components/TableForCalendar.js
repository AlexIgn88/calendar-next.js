function TableForCalendar({ date, setDate }) {

    let [day, month, year] = date.split('.');
    month = month - 1;

    function getDay(evt) {
        const day = evt.target.closest('td')?.textContent;
        if (!day) return
        setDate(String(day).padStart(2, '0') + '.' + date.split('.')[1] + '.' + date.split('.')[2]);
    }

    return monthAsTBody(year, month);

    function weekTDArray(monday, daysNumber) {
        const
            result = [];
        for (let i = 0; i < 7; i++) {
            let
                td = <td key={Date.now() + i}></td>,
                date = monday + i;
            if (date > 0 && date <= daysNumber) td = <td key={Date.now() + i} data-day={date} className={
                date === +day ? 'current' : ''
            }>{date}</td>;
            result.push(td);
        }
        return result;
    }

    function monthTRArray(startShift, daysNumber) {
        const
            result = [];
        for (let weekStart = 1 - startShift; weekStart <= daysNumber; weekStart += 7) {
            const
                tr = <tr key={Date.now() + weekStart}>{...weekTDArray(weekStart, daysNumber)}</tr>
            result.push(tr);
        }
        return result;
    }

    function monthAsTBody(year, month) {
        const
            daysInMonth = (new Date(year, month + 1, 0)).getDate(),
            firstDayOfWeek = (new Date(year, month, 1)).getDay(),
            startShift = (-1 + firstDayOfWeek + 7) % 7;

        return <table className="table-for-calendar">
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
            <tbody onClick={evt => getDay(evt)}>{...monthTRArray(startShift, daysInMonth)}</tbody>
        </table>
    }
}

export default TableForCalendar