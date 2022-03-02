import React from "react";

const style = {
  backgroundColor: "skyblue",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClickAdd, disabled } = props;
  return (
    <div style={style}>
      <input
        placeholder="TODO入力"
        value={todoText}
        onChange={onChange}
        disabled={disabled}
      ></input>
      <button disabled={disabled} onClick={onClickAdd}>
        追加
      </button>
    </div>
  );
};
