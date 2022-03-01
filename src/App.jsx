import React from "react";
import "./styles.css";

const App = () => {
  return (
    <>
      <div>
        <input placeholder="TODO入力"></input>
        <button>追加</button>
      </div>
      <div></div>
      <ul>
        <p>未完了のタスク</p>
        <div>
          <li>ああああ</li>
          <button>完了</button>
          <button>削除</button>
        </div>
        <div>
          <li>いいいい</li>
          <button>完了</button>
          <button>削除</button>
        </div>
      </ul>
      <div>
        <ul>
          <p>完了のタスク</p>
          <div>
            <li>うううう</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};

export default App;
