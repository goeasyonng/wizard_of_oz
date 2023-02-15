import React, { useEffect, useState } from "react";
import { questions } from "../data/QuizList";
import { useNavigate } from "react-router-dom";

function Questions({ getData }) {
  const [quizIndex, setQuizIndex] = useState(0);
  const [endPage, setEndPage] = useState(false);
  const [frontCount, setFrontCount] = useState(0);
  const [backCount, setBackCount] = useState(0);
  const [result, setResult] = useState([]);
  const [kind, setKind] = useState("");
  const navigate = useNavigate();

  const onClick = (option) => {
    if (option == "front") {
      setFrontCount(frontCount + 1);
      setResult([...result, questions[quizIndex].answerOptions[0].resultText]);
    } else {
      setBackCount(backCount + 1);
      setResult([...result, questions[quizIndex].answerOptions[1].resultText]);
    }

    const nextQuiz = quizIndex + 1;

    if (nextQuiz < questions.length) {
      setQuizIndex(nextQuiz);
    } else {
      setEndPage(true);

      if (frontCount > backCount) {
        setKind("당신에게 적합한 개발 영역은 프론트엔드입니다.");
      } else if (frontCount < backCount) {
        setKind("당신에게 적합한 개발 영역은 백엔드입니다.");
      } else {
        setKind("당신에게 적합한 개발 영역은 풀스택입니다.");
      }
    }
  };

  useEffect(() => {
    getData(kind, result);
  }, [kind]);

  useEffect(() => {
    if (kind && endPage) {
      navigate(`/Result`);
    }
  }, [kind, endPage]);

  console.log("frontCount:", frontCount);
  console.log("backCount:", backCount);

  return (
    <>
      <div className="book__text page">
        {endPage ? (
          <></>
        ) : (
          <section className="text__page">
            <div>
              <span>{questions[quizIndex].questionText}</span>
            </div>
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
