import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Add = (props) => {
  const onChangeValue = (e) => {
    return props.changeValue(e.target.value);
  };
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <i
      className="fa fa-calendar cal1 due-date-button"
      data-title="Set a Due date"
      onClick={onClick}
      ref={ref}
      value={value}
    ></i>
  ));
  const addList = () => {
    const month = startDate.getMonth() + 1;
    let monthName;
    switch (month) {
      case 1:
        monthName = "Jan";
        break;
      case 2:
        monthName = "Feb";
        break;
      case 3:
        monthName = "Mar";
        break;
      case 4:
        monthName = "Apr";
        break;
      case 5:
        monthName = "May";
        break;
      case 6:
        monthName = "Jun";
        break;
      case 7:
        monthName = "Jul";
        break;
      case 8:
        monthName = "Aug";
        break;
      case 9:
        monthName = "Sep";
        break;
      case 10:
        monthName = "Oct";
        break;
      case 11:
        monthName = "Nov";
        break;
      case 12:
        monthName = "Dec";
        break;
      default:
        monthName = "undefined";
    }
    props.setList((prev) => [
      ...prev,
      {
        todoValue: props.TodoValue,
        date:
          startDate.getDate() +
          "th " +
          monthName +
          " " +
          startDate.getFullYear(),
        check: false,
        dataTitle: "Mark as completed"
      },
    ]);
    props.changeValue("");
    alert("Thêm thành công");
  };
  return (
    <div class="header-section">
        <div className="header-section-input">
          <input
            type="text"
            placeholder="Add new ..."
            value={props.TodoValue}
            onChange={onChangeValue}
          />
        </div>
        <div className="header-section-calendar">

        <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={<ExampleCustomInput/>}
        dateFormat="dd/MMM/yyyy"
      ></DatePicker>
          <button
            type="button"
            className="header-section-button"
            id="add"
            onClick={addList}
          >
            Add
          </button>
        </div>
      </div>
  )
}
export default Add;
