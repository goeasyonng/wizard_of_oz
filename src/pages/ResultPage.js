
import React, { useState, useEffect } from "react";
import { questions } from "../data/QuizList";
import "../CSS/result.css";
import styled from "styled-components";
import { useScript } from "../hooks";
import { CopyToClipboard } from "react-copy-to-clipboard";
import kakaoLogo from "../image/kakaologo.png";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

const KakaoIcon = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;
const KakaoShareButton = styled.a`
  cursor: pointer;
  margin-right: 20px;
`;

const URLShareButton = styled.button`
  width: 48px;
  height: 48px;
  color: white;
  border-radius: 24px;
  border: 0px;
  font-weight: 800;
  font-size: 18px;
  cursor: pointer;
  background-color: grey;
  &:hover {
    background-color: #a99fee;
  }
`;

function Questions() {
  const handleKakaoButton = () => {
    window.Kakao.Link.sendScrap({
      requestUrl: currentUrl,
    });
  };

  const [quizIndex, setQuizIndex] = useState(0); //현재 문제 페이지를 세는 변수
  const [endPage, setEndPage] = useState(false); //문제 페이지의 끝에서 True로 바뀌게 하는 변수
  const [frontCount, setFrontCount] = useState(0); //선택지 1을 누른 횟수를 세는 변수
  const [backCount, setBackCount] = useState(0); //선택지 2를 누른 횟수를 세는 변수
  const [result, setResult] = useState([]); //선택에 따라 해당 선택에 따른 각각 다른 문장을 담아두는 변수
  const currentUrl = window.location.href.replace();

  // kakao SDK import하기
  const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");

  // kakao sdk 초기화하기
  // status가 변경될 때마다 실행되며, status가 ready일 때 초기화를 시도합니다.
  useEffect(() => {
    if (status === "ready" && window.Kakao) {
      // 중복 initialization 방지
      if (!window.Kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        window.Kakao.init("852a9e4a5acf3e0a673805852a1cf45b");
      }
    }
  }, [status]);

  const shareKakao = () => {
    window.Kakao.Link.sendCustom({
      templateId: 89972,
    });
  };

      //총 페이지를 세어 마지막을 나타내는 함수
      const nextQuiz = quizIndex + 1;

      if (nextQuiz < questions.length) {
         setQuizIndex(nextQuiz);
      } else {
         setEndPage(true);
      }
   };

   console.log('frontCount:', frontCount);
   console.log('backCount:', backCount);
   console.log(
      'result',
      result.map(item => <div>{item}</div>),
   );

  console.log("frontCount:", frontCount);
  console.log("backCount:", backCount);
  console.log(
    "result",
    result.map((item) => <text>{item}</text>)
  );

  return (
    <>
      {/* result  */}
      <div className="container">
        <div className="book__text page">
          {endPage ? (
            <section>
              {frontCount >= backCount ? (
                frontCount > backCount ? (
                  <div>
                    <div className="title_1">
                      당신에게 적합한 개발 영역은 ...
                    </div>

                    <div className="img_box">
                      <div className="result_img_1"></div>
                    </div>

                    <div className="title_2">프론트엔드입니다</div>
                    <div className="txt_box">
                      <div className="result_txt">
                        {result.map((item) => (
                          <div>{<li>{item}</li>}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="title_1">
                      당신에게 적합한 개발 영역은 ...
                    </div>

                    <div className="img_box">
                      <div className="result_img_2"></div>
                    </div>

                    <div className="title_2">풀스택입니다</div>
                    <div className="txt_box">
                      <div className="result_txt">
                        {result.map((item) => (
                          <div>{<li>{item}</li>}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              ) : (
                <div>
                  <div className="title_1">당신에게 적합한 개발 영역은 ...</div>

                  <div className="img_box">
                    <div className="result_img_3"></div>
                  </div>

                  <div className="title_2">백엔드입니다</div>
                  <div className="txt_box">
                    <div className="result_txt">
                      {result.map((item) => (
                        <div>{<li>{item}</li>}</div>
                      ))}
                    </div>
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

          <div className="share">
            {endPage ? <span>친구들에게 결과를 공유하기</span> : null}
          </div>

          <div className="shareBtn">
            {endPage ? (
              <FacebookShareButton
                style={{ marginRight: "20px" }}
                url={"https://www.naver.com/"}
              >
                <FacebookIcon
                  size={48}
                  round={true}
                  borderRadius={24}
                ></FacebookIcon>
              </FacebookShareButton>
            ) : null}

            {endPage ? (
              <TwitterShareButton
                style={{ marginRight: "20px" }}
                url={"https://twitter.com/?lang=ko"}
              >
                <TwitterIcon
                  size={48}
                  round={true}
                  borderRadius={24}
                ></TwitterIcon>
              </TwitterShareButton>
            ) : null}

            {endPage ? (
              <KakaoShareButton onClick={shareKakao}>
                <KakaoIcon src={kakaoLogo}></KakaoIcon>
              </KakaoShareButton>
            ) : null}

            {endPage ? (
              <CopyToClipboard text="https://www.naver.com/">
                <URLShareButton>URL</URLShareButton>
              </CopyToClipboard>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );

}

export default ResultPage;
