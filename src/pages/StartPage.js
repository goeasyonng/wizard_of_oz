import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../fbase';
import '../CSS/start.css';

export default function BookQuiz() {
   const [total, setTotal] = useState(0);

   const getData = async () => {
      const docRef = doc(db, 'users', 'count');
      const docSnap = await getDoc(docRef);
      const count = docSnap.data().count;
      setTotal(count);
   };
   useEffect(() => {
      getData();
      console.log('total' + total);
   }, [total]);

   const handleClick = e => {
      const target = e.target.value;
      console.log(target);
      setDoc(doc(db, 'users', 'count'), {
         count: total + 1,
      });
   };

   return (
      <div className='book'>
         <div className='book__coverpage'>
            <h1 className='content__title'>
               <div>DEVELOPER</div>
               <div className='of'>OF</div>
               <div className='oz'>OZ</div>
            </h1>
            <div className='book__typewriter'>
               <span className='start_info'>오즈의 마법같은</span>
               <span className='start_info'>개발자 성향 테스트 !!</span>
            </div>

            <Link className='book__guide' to='/Question'>
               <button className='start_button' onClick={handleClick}>
                  시작하기
               </button>
            </Link>
            <span className='users'>{total} 명이 테스트에 참여했습니다</span>
         </div>
      </div>
   );
}
