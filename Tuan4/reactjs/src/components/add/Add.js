import React from "react";

class Add extends React.Component {
  componentDidUpdate() {}
  handleInputChange = (e) => {
    this.props.onChangeValue(e.target.value);
    console.log(this.props.data);
  };
  handleAddList = () => {
    this.props.addList();
    console.log(this.props.data);
  };
  render() {
    return (
      <div class="header-section">
        <div className="header-section-input">
          <input
            type="text"
            placeholder="Add new ..."
            value={this.props.data.value}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="header-section-calendar">
          <label className="cal-text due-date-label">Due date not set</label>
          <i
            className="fa fa-calendar cal1 due-date-button"
            data-title="Set a Due date"
          ></i>
          <i
            className="fa fa-calendar-times-o cal2 due-date-button"
            data-title="Clear Due date"
          ></i>
          <button
            type="button"
            className="header-section-button"
            id="add"
            onClick={this.handleAddList}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}
export default Add;
