import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./Components/InputTodo";
import { InCompleteTodos } from "./Components/InCompleteTodos";
import { CompleteTodos } from "./Components/CompleteTodos";

const App = () => {
  const [todoText, setTodoText] = useState("");

  const [inCompleteTodos, setIncompleteTodos] = useState([]);

  const [completeTodos, setCompleteTodos] = useState([]);

  // 入力値が変更になったイベント
  //  inputで入力された値の取得方法 引数 event
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };
  // 追加ボタンクリックイベント
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...inCompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  // 削除ボタンクリックイベント
  const onClickDelete = (index) => {
    const newTodos = [...inCompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  // 完了ボタンクリックイベント
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...inCompleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, inCompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  // 戻すボタンクリックイベント
  const onClickReturn = (index) => {
    const newIncompleteTodos = [...inCompleteTodos, completeTodos[index]];

    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClickAdd={onClickAdd}
      />
      <InCompleteTodos
        todos={inCompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickReturn={onClickReturn} />
    </>
  );
};

export default App;
