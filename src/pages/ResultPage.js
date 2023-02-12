import React, { useState } from "react";
import { questions } from "../data/QuizList";

function Questions() {
  const [quizIndex, setQuizIndex] = useState(0); //현재 문제 페이지를 세는 변수
  const [endPage, setEndPage] = useState(false); //문제 페이지의 끝에서 True로 바뀌게 하는 변수
  const [frontCount, setFrontCount] = useState(0); //선택지 1을 누른 횟수를 세는 변수
  const [backCount, setBackCount] = useState(0); //선택지 2를 누른 횟수를 세는 변수
  const [result, setResult] = useState([]); //선택에 따라 해당 선택에 따른 각각 다른 문장을 담아두는 변수

  //버튼 클릭 이벤트가 발생했을 떄 시행되는 훅
  const onClick = (option) => {
    //선택에 따른 횟수와 결과문장을 담아두는 함수
    if (option == "front") {
      setFrontCount(frontCount + 1);
      setResult([...result, questions[quizIndex].answerOptions[0].resultText]);
    } else {
      setBackCount(backCount + 1);
      setResult([...result, questions[quizIndex].answerOptions[1].resultText]);
    }

    //총 페이지를 세어 마지막을 나타내는 함수
    const nextQuiz = quizIndex + 1;

    if (nextQuiz < questions.length) {
      setQuizIndex(nextQuiz);
    } else {
      setEndPage(true);
    }
  };

  console.log("frontCount:", frontCount);
  console.log("backCount:", backCount);
  console.log(
    "result",
    result.map((item) => <text>{item}</text>)
  );

  return (
    <>
      <div className="book__text page">
        {endPage ? (
          <section>
            {frontCount >= backCount ? (
              frontCount > backCount ? (
                <div>
                  <div>당신에게 적합한 개발 영역은 프론트엔드입니다.</div>
                  <div>
                    {result.map((item) => (
                      <div>{item}</div>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <div>당신에게 적합한 개발 영역은 풀스택입니다.</div>
                  <div>
                    {result.map((item) => (
                      <div>{item}</div>
                    ))}
                  </div>
                </div>
              )
            ) : (
              <div>
                <div>당신에게 적합한 개발 영역은 백엔드입니다.</div>
                <div>
                  {result.map((item) => (
                    <div>{item}</div>
                  ))}
                </div>
              </div>
            )}
          </section>
        ) : (
          <section className="text__page">
            <div>
              {/* 페이지 위치 */}
              {/* <p>
                {quizIndex + 1}/ {questions.length}
              </p> */}
              <span>{questions[quizIndex].questionText}</span>
            </div>
            {/* 선택 */}
            <div>
              {questions[quizIndex].answerOptions.map((item) => (
                <button onClick={() => onClick(item.option)}>
                  {item.answerText}
                </button>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}

export default Questions;
