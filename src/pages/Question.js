import React from 'react';
// import Questions from './ResultPage';
import '../CSS/book.css';

export default function Question() {
   // 문제들

   return (
      <div className='book'>
         <div className='coverFront'></div>
         {/* page flip animation */}
         <div className='page'></div>
         <div className='page'></div>
         <div className='page'></div>
         <div className='page'></div>
         <div className='page'></div>
         {/* Quetions 컴포넌트로! */}

         <div className='lastPage'>{/* <Questions /> */}</div>
         <div className='coverBack'></div>
      </div>
   );
}
