import React, { useState } from "react";
import Add from "./components/add/Add";
import List from "./components/list/List";
import Option from "./components/option/Option";
import './App.css';
import Title from "./components/title/Title";

function App() {
  const [TodoValue, setTodoValue] = useState("");
  const changeValue = (value) => {
    return setTodoValue(value);
  }
  const [list, setList] = useState([
    {
      todoValue: "Buy groceries for next week",
      date: "18th Jan 2022",
      check:true,
      dataTitle: "Mark as to do"
    },
    {
      todoValue: "Renew car insurance",
      date: "19th Jan 2022",
      check:true,
      dataTitle: "Mark as to do"
    },
    {
      todoValue: "Sign up for online course",
      date: "20th Jan 2022",
      check:true,
      dataTitle: "Mark as to do"
    },
  ]
  );
  return (
    <div className="container">
      <Title />
      <Add
        TodoValue = {TodoValue}
        changeValue = {changeValue}
        list = {list}
        setList = {setList}
      />
      <div className="border-bottom"></div>
      <Option />
      <List list={list} setList={setList}/>
    </div>
  );
}
export default App;
