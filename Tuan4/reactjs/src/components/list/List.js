import React, { Component } from "react";


class List extends Component {
    x = [...this.props.list];
    render() {
        console.log(this.props.list);
        console.log(this.x);
        return (
            <div className="list">
                {this.x.map((value, index) => (
                    <div className="list-item" key={index}>
                        <div className="list-item-right">
                            <h2 className="list-item-right-icon">
                                <span></span>
                                <input type="checkbox" id={"item" + index}   data-title="Mark as completed" />
                            </h2>
                            <div class="list-item-right-title">
                                <input type="text" className="text"  value={value.value} title="Buy groceries for next week" />
                                <input type="text" id={index} className="text" Style="display: none;" value={value.value} />
                            </div>
                        </div>
                        <div className="list-item-left">
                            <div className="list-item-left-action">
                                    <i className="fa fa-pencil" Style={"color:#17a2b8"}   data-title="Edit todo"></i>
                                    <i className="fa fa-trash-o btn-danger" onClick="xoa()" Style="color:#dc3545"   data-title="Delete todo"></i>
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
}
export default List;