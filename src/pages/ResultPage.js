import React, { useState, useEffect } from "react";
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

export default function Result({ title, detail }) {
  const currentUrl = window.location.href.replace();

  // kakao SDK import하기
  const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");

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

  const handleKakaoButton = () => {
    window.Kakao.Link.sendScrap({
      requestUrl: currentUrl,
    });
  };

  return (
    <div>
      <div>{title} </div>
      <div>
        {detail.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </div>
  );
}
