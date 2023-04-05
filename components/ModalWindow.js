import { useState } from 'react'

function ModalWindow({ setShowModalWindow, inputValue, setInputValue }) {
    const [inputYearValue, setinputYearValue] = useState(+inputValue.split('-')[0]);

    function setData(evt) {
        const td = evt.target.closest('td');
        if (!td) return

        setInputValue(inputYearValue + '-' + evt.target.dataset?.month);
        setShowModalWindow(false);
    }

    return <div className="modal-window">
        <input
            type='number'
            value={inputYearValue}
            onChange={evt => setinputYearValue(evt.target.value)}
        />
        <table>
            <tbody onClick={evt => setData(evt)}>
                <tr>
                    <td data-month='01'>янв</td>
                    <td data-month='02'>фев</td>
                    <td data-month='03'>мар</td>
                    <td data-month='04'>апр</td>
                </tr>
                <tr>
                    <td data-month='05'>май</td>
                    <td data-month='06'>июн</td>
                    <td data-month='07'>июл</td>
                    <td data-month='08'>авг</td>
                </tr>
                <tr>
                    <td data-month='09'>сен</td>
                    <td data-month='10'>окт</td>
                    <td data-month='11'>ноя</td>
                    <td data-month='12'>дек</td>
                </tr>
            </tbody>
        </table>
    </div>
}

export default ModalWindow