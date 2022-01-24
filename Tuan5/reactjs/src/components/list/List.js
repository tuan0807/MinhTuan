import React, { useState, useRef } from "react";

const List = (props) => {
    const now = new Date();
    const month = now.getMonth();
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
            monthName = "undefind";
    }
    
    const [edit, setEdit] = useState(true);
    const ref = useRef([]);
    const btEdit = (index) => {
        setEdit(false);
        console.log(ref.current[index]);
        ref.current[index].focus();
    }

    const btDelete = (index) => {
        console.log(index);
        props.list.splice(index, 1);
        console.log(props.list);
        props.setList([...props.list]);
    };
    const checkEnter = (e) => {
        if (e.keyCode === 13) {
          alert("Sửa thành công");
          return setEdit(true);
        }
    };
    const fixValue = (index,e) => {
        console.log(props.list[index].todoValue)
        props.list[index].todoValue=e.target.value
        props.setList([...props.list])
        console.log(props.list)
      };
    
    
    const changeDataTitle = (index, check) => {
        if (check === true) {
            props.list[index].check = false;
            props.list[index].dataTitle = "Mark as completed"
            props.setList([...props.list])
        }
        else {
            props.list[index].check = true;
            props.list[index].dataTitle = "Mark as to do"
            props.setList([...props.list])
        }
    };

    return (
        <div className="list">
            {props.list.map ((value, index) =>(
                <div className="list-item" key={index}>
                    <div className="list-item-right">
                        <h2 className="list-item-right-icon">
                            <span></span>
                            <input  
                                type="checkbox"
                                data-title={value.dataTitle}
                                onChange={() => changeDataTitle(index, value.check)}
                            />  
                        </h2>
                        <div className="list-item-right-title">
                            <input
                                type="text"
                                className="text" 
                                value={value.todoValue} 
                                disabled={edit}
                                onKeyUp={checkEnter}
                                title={value.todoValue}
                                onChange={(e)=>fixValue(index,e)}
                                ref={(el) => (ref.current[index] = el)}
                            />
                           
                        </div>
                    </div>
                <div className="list-item-left">
                    <div className="list-item-left-action">
                            <i
                                className="fa fa-pencil"
                                Style="color:#17a2b8"
                                data-title="Edit todo"
                                onClick = {() => btEdit(index)}
                            />
                            <i
                                className="fa fa-trash-o btn-danger"
                                Style="color:#dc3545"
                                data-title="Delete todo"
                                onClick = {() => btDelete(index)}
                            />
                    </div>
                    <div className="list-item-left-info">
                        <i className="fa fa-info-circle"   data-title="Created date" ></i>
                        <label className="date">{value.date}</label>
                    </div>
                </div>
        </div>
            ))}
                
        </div>
    );
}
export default List;