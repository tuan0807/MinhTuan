import React, { Component } from "react";
import Add from "./components/add/Add";
import List from "./components/list/List";
import Option from "./components/option/Option";
import './App.css';
import Title from "./components/title/Title";

class App extends Component {
  state = {
    Value: "",
    list:
      [
        {
          value: "Buy groceries for next week",
          date: "18th Jan 2022",
        },
        {
          value: "Renew car insurance",
          date: "19th Jan 2022",
        },
        {
          value: "Sign up for online course",
          date: "20th Jan 2022",
        },
      ] ?? [],
  };
  onChangeTodoValue = (value) => {
    this.setState({ Value: value });
  };
  addList = () => {
    this.setState ({
      list: this.state.list.push({
        value: this.state.value,
        date:
          new Date().getDate() +
          "th " +
          new Date().getMonth() + 1 +
          " " +
          new Date().getFullYear(),
      }),
    });
    this.setState({ value: "" });
    alert("Add job to list successfully!");
  };
  render() {
    return (
        <div className="container">
            <Title />
            <Add
              data={this.state}
              onChangeValue={this.onChangeValue}
              addList={this.addList}
            />
            <div className="border-bottom"></div>
            <Option />
            <List list={this.state.list} />
        </div>
    );
  }
}
export default App;
