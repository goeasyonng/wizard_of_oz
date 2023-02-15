import React from 'react';
import Questions from './ResultPage';
import Images from '../components/Images';
import Progress from '../components/Progress';
import '../CSS/book.css';

export default function FlipBook() {
   // 프로그래스바...

   return (
      <>
         <div className='book'>
            {/* // 애니메이션만 적용! */}
            <div className='bookList'>
               <div className='coverFront'></div>
               <div className='page'></div>
               <div className='page'></div>
               <div className='page'></div>
               <div className='page'></div>
               <div className='page'></div>
               {/* 애니메이션 끝 */}

               {/* 컴포넌트 데이터 전달 */}
               <div className='imagePage'></div>
               <div className='lastPage'>
                  <div className='rightPage'>
                     <Questions />
                  </div>
               </div>
               <div className='coverBack'></div>
            </div>
            <div className='progress__bar'>
               <Progress />
               <span></span>
            </div>
         </div>
      </>
   );
}
