import React from 'react';
import { Link } from 'react-router-dom';

export default function BookQuiz() {
   const handleClick = e => {
      const target = e.target.value;
      console.log(target);
   };
   return (
      <div className='book'>
         <div className='book__cover page'>
            <h1 className='content__title'>오즈와 마법사로 알아보는 개발자 성향을 알아보자..</h1>
            <div className='book__typewriter'>
               <p>이야기를 시작하겠습니다..</p>
            </div>

            <Link className='book__guide' to='/Question'>
               <button type='button' onClick={handleClick}>
                  클릭하기!
               </button>
            </Link>

            {/* page2 back */}
            <div className='book__cover page'>
               <span>OZ 코딩스쿨</span>
            </div>
         </div>
      </div>
   );
}
