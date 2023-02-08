import React from 'react';
import Quiz from '../components/Quiz';

export default function BookQuiz() {
   // 커버 이미지 url
   // const imgUrl = '';

   const handleClick = e => {
      console.log(e);
   };
   return (
      <div className='book'>
         {/* page1 front*/}
         <div className='book__cover page'>
            <h1 className='content__title'>오즈와 마법사로 알아보는 개발자 성향을 알아보자..</h1>
            <div className='book__typewriter'>
               <p>이야기를 시작하겠습니다..</p>
            </div>

            <div className='book__guide'>
               <button type='button' onClick={handleClick}>
                  클릭하기!
               </button>
            </div>

            {/* page2 back */}
            <div className='book__cover page'>
               <span>OZ 코딩스쿨</span>
            </div>

            {/* 퀴즈 컴포넌트 추가할 곳 */}
            {/* <div className='book__text page'>
               <div className='text__page'>
                  <p>Q1 추가하기</p>
                  <button>1.</button>
                  <button>2.</button>
               </div>
            </div> */}
            <Quiz />
         </div>
      </div>
   );
}
