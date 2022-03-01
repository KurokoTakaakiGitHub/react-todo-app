import React from "react";
import "./styles.css";

const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="TODO入力"></input>
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <ul>
          <p className="title">未完了のタスク</p>
          <div className="list-row">
            <li>ああああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="list-row">
            <li>いいいい</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <ul>
          <p className="title">完了のタスク</p>
          <div className="list-row">
            <li>うううう</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};

export default App;
