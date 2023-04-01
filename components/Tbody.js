function Tbody({ year, month }) {
    return monthAsTBody(year, month);
    
    function weekTDArray(monday, daysNumber) {
        const
            result = [];
        for (let i = 0; i < 7; i++) {
            let
                td = <td key={Date.now() + i}></td>,
                date = monday + i;
            if (date > 0 && date <= daysNumber) td = <td key={Date.now() + i}>{date}</td>;
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

        return <tbody>{...monthTRArray(startShift, daysInMonth)}</tbody>
    }
}

export default Tbody