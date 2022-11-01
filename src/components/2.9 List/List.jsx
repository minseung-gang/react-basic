import React from "react";

export default function List() {
  /* const numbers = [1, 2, 3, 4, 5];
  return (
    <ul>
      {numbers.map((item) => (
        <li key={item.toString()}>{item}</li>
      ))}
    </ul>
  ); */
  const todos = [
    { id: 1, text: "Drink Water" },
    { id: 2, text: "Go to Bed" },
    { id: 3, text: "Listen Lecture" },
    { id: 4, text: "Take a Shower" },
  ];
  const Item = (props) => {
    return <li>{props.text}</li>;
  };
  const TodoList = todos.map((todo) => <Item {...todo} key={todo.id} />);
  return TodoList;
}
