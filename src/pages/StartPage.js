import React from "react";
import { Link } from "react-router-dom"; // request react-router-dom librasy install
import "../CSS/start.css";

export default function BookQuiz() {
  const handleClick = (e) => {
    const target = e.target.value;
    console.log(target);
  };

  return (
    <div className="book">
      <div className="book__coverpage">
        <h1 className="content__title">
          <div>DEVELOPER</div>
          <div className="of">OF</div>
          <div className="oz">OZ</div>
        </h1>
        <div className="book__typewriter">
          <p className="start_info">오즈의 마법같은</p>
          <p className="start_info">개발자 성향 테스트 !!</p>
        </div>

        <Link className="book__guide" to="/Question">
          <button className="start_button" onClick={handleClick}>
            시작하기
          </button>
        </Link>

        <div className="brand_logo">
          <a href="https://ozcodingschool.com/" target="_blank">
            <button className="oz_logo">
              <img
                src={`${process.env.PUBLIC_URL}/ozcoding_logo.png`}
                className="App-logo"
                alt="React"
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
