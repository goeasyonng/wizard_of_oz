import React from "react";
import { Link } from "react-router-dom"; // request react-router-dom librasy install

function BookQuiz() {
  const handleClick = (e) => {
    const target = e.target.value;
    console.log(target);
  };

  return (
    <div className="book">
      <div className="book__cover page">
        <h1 className="content__title">DEVELOPER OF OZ</h1>
        <div className="book__typewriter">
          <p>오즈와 마법사로 알아보는 개발자 성향 테스트</p>
        </div>

        <Link className="book__guide" to="/Question">
          <button type="button" onClick={handleClick}>
            클릭하기!
          </button>
        </Link>

        <div className="book__cover page">
          <span>OZ 코딩스쿨</span>
        </div>
      </div>
    </div>
  );
}

export default BookQuiz;
