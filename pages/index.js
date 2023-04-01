function Calendar() {

    return <div className="calendar">
        <input id='month-input' type="month" />
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

export default Calendar;