import React, { useState, useEffect } from "react";
import "../CSS/result.css";
import styled from "styled-components";
import { useScript } from "../hooks";
import { CopyToClipboard } from "react-copy-to-clipboard";
import kakaoLogo from "../image/kakaologo.png";
import { Link } from "react-router-dom";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import Loading from "../components/Loading";

const Reset = styled.button`
position: fixed;
top:80%;
left:90%;
width: 50px;
height: 50px;
color: white;
border-radius: 50%;
border: none;
font-size: 18px;
cursor: pointer;
background-color: grey;
&:hover {
   background-color: #a99fee;
`;

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

export default function ResultPage({ title, detail }) {
  const currentUrl = window.location.href.replace();

  // kakao SDK import하기
  const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (status === "ready" && window.Kakao) {
      // 중복 initialization 방지
      if (!window.Kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        window.Kakao.init("852a9e4a5acf3e0a673805852a1cf45b");
      }
    }
  }, [status]);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  const shareKakao = () => {
    window.Kakao.Link.sendCustom({
      templateId: 89972,
    });
  };

  const handleKakaoButton = () => {
    window.Kakao.Link.sendScrap({
      requestUrl: currentUrl,
    });
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="book__textpage">
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
            <Link className="link" to="/">
              <Reset>홈</Reset>
            </Link>
            <div className="img_box">
              <div className="result_img_1"></div>
            </div>

            <div className="title">
              <div>당신에게 어울리는 개발 영역은</div>
              <div>{title}</div>{" "}
            </div>

            <div className="txt_box">
              {detail.map((item) => (
                <div className="result_txt">{item}</div>
              ))}
            </div>

            <div className="shareContainer">
              <div className="share">
                <div>친구들에게 결과를 공유하기</div>
              </div>

              <div className="shareBtn">
                <FacebookShareButton
                  style={{ marginRight: "20px" }}
                  url={"https://fluffy-parfait-861a02.netlify.app"}
                >
                  <FacebookIcon
                    size={48}
                    round={true}
                    borderRadius={24}
                  ></FacebookIcon>
                </FacebookShareButton>

                <TwitterShareButton
                  style={{ marginRight: "20px" }}
                  url={"https://fluffy-parfait-861a02.netlify.app"}
                >
                  <TwitterIcon
                    size={48}
                    round={true}
                    borderRadius={24}
                  ></TwitterIcon>
                </TwitterShareButton>

                <KakaoShareButton onClick={shareKakao}>
                  <KakaoIcon src={kakaoLogo}></KakaoIcon>
                </KakaoShareButton>

                <CopyToClipboard text="https://fluffy-parfait-861a02.netlify.app/">
                  <URLShareButton>URL</URLShareButton>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
