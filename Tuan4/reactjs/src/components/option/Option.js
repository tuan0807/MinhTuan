import React from "react";

const Option = () => {
    return (
        <div className="option">
            <div className="option-item" Style="padding: 0 16px;">
                <label className="option-item-text">Filter</label>
                
                <select className="option-item-menu">
                    <option value="all" selected >All</option>
                    <option value="completed">Completed</option>
                    <option value="active">Active</option>
                    <option value="has-due-date">Has due date</option>
                </select>
            </div>
            <div className="option-item" >
                <label className="option-item-text" >Sort</label>
                <select className="option-item-menu">
                    <option value="added-date-asc" selected>Added date</option>
                    <option value="due-date-desc">Due date</option>
                </select>
                <i className="fa fa-sort-amount-asc"   data-title="Ascending"></i>
                <i className="fa fa-sort-amount-desc" Style="display: none;"   data-title="Descending"></i>
            </div>
        </div>
    );
}
export default Option;