import React, { useState } from 'react';
import "./BatchSection.css";

import { useHistory } from "react-router-dom";

function BatchSection() {
    const history = useHistory();

    const [firstDate,setFirstDate] = useState("2nd - 3rd April");
    const [secondDate,setSecondDate] = useState("9th - 10th April");
    const [batchTime,setBatchTime] = useState("5pm to 7pm");
    const [dateIndex,setDateIndex] = useState(0);
    const [bookDate,setBookDate] = useState("");
    const [bookTime,setBookTime] = useState("");
    const [selectBtn,setSelectBtn] = useState({
        one: 0,
        two: 0,
        three: 0,
        four: 0
    })
    const select = {
        one: 1,
        two: 2,
        three: 3,
        four: 4
    }

    const [isDateSelected,setIsDateSelected] = useState(false);

    const dateHandler = (index) => {
        if(index === 1 && selectBtn.one !== 1) {
            setSelectBtn({
                ...selectBtn,
                one: 1,
                two: 0
            });
            setBookDate(`for ${firstDate}`);
            // setIsDateSelected(true);
        }
        else if(index === 2 && selectBtn.two !== 2) {
            setSelectBtn({
                ...selectBtn,
                two: 2,
                one: 0
            });
            setBookDate(`for ${secondDate}`);
            setIsDateSelected(true);
        }
        else {
            setSelectBtn({
                ...selectBtn,
                one: 0,
                two: 0
            });
            setBookDate("")
            // setIsDateSelected(false);
         };
    }

    const batchTimeHandler = (index) => {
        if(index===3 && selectBtn.three !== 3) {
            setSelectBtn({
                ...selectBtn,
                three: 3,
                four: 0
            });
            setBookTime(`, ${batchTime}`);
            
            // if(isDateSelected) onClickHandler();

        } else if(index === 4 && selectBtn.four !== 4) {
            setSelectBtn({
                ...selectBtn,
                four: 4,
                three: 0
            });
            setBookTime(`, ${batchTime}`);
            // if(isDateSelected) onClickHandler();
        }
        else {
            setSelectBtn({
                ...selectBtn,
                three: 0,
                four: 0
            });
            setBookTime("");
        }
    }

    const onClickHandler = () => {
        history.push("/studentsignup");
    }

    return (
        <div className="batch_section">
            <h1 className="batch_title">Pick a <span className="batch_text">batch</span></h1>
            <div className="batch_content">
                <button className={ select.one === selectBtn.one ? "btn_date btn_select":"btn_date" } onClick={() => dateHandler(1)} >{firstDate}</button>
                <button className={ select.three === selectBtn.three ? "btn_time btn_select":"btn_time" } onClick={() => batchTimeHandler(3)} >{batchTime}</button>
            </div>
            <div className="batch_content batch_margin_top">
                <button className={ select.two === selectBtn.two ? "btn_date btn_select":"btn_date" } onClick={() => dateHandler(2)} >{secondDate}</button>
                <button className={ select.four === selectBtn.four ? "btn_time btn_select":"btn_time" } onClick={() => batchTimeHandler(4)} >{batchTime}</button>
            </div>
            <div className="book_my_seat">
                <button className="btn_book" onClick={onClickHandler} >Book my seat {bookDate} {bookTime} </button>
            </div>
        </div>
    )
}

export default BatchSection;