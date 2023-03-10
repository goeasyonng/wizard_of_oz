import React, { useEffect, useState } from 'react';
import { questions } from '../data/QuizList';
import { useNavigate } from 'react-router-dom';
import '../CSS/question.css';
import '../CSS/flipbook.css';
import ProgressBar from '@ramonak/react-progress-bar';
import Loading from '../components/Loading';
import ResultPage from '../pages/ResultPage';

function Questions({ getData }) {
   const [quizIndex, setQuizIndex] = useState(0);
   const [endPage, setEndPage] = useState(false);
   const [frontCount, setFrontCount] = useState(0);
   const [backCount, setBackCount] = useState(0);
   const [result, setResult] = useState([]);
   const [kind, setKind] = useState('');
   const navigate = useNavigate();

   const onClick = option => {
      if (option == 'front') {
         setFrontCount(frontCount + 1);
         setResult([...result, questions[quizIndex].answerOptions[0].resultText]);
      } else {
         setBackCount(backCount + 1);
         setResult([...result, questions[quizIndex].answerOptions[1].resultText]);
      }

      // 로딩 ? 로딩 : 모바일 ? 모바일 : 웹
      // 모바일 ? 바로 : ( 로딩 ? 로딩 : 실행 )

      const nextQuiz = quizIndex + 1;

      if (nextQuiz < questions.length) {
         setQuizIndex(nextQuiz);
      } else {
         setEndPage(true);

         if (frontCount > backCount) {
            setKind('프론트엔드입니다.');
         } else if (frontCount < backCount) {
            setKind('백엔드입니다.');
         } else {
            setKind('풀스택입니다.');
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

   console.log('frontCount:', frontCount);
   console.log('backCount:', backCount);

   return (
      <>
         <div className='book'>
            <div className='bookList'>
               <div className='coverFront'></div>
               <div className='page'></div>
               <div className='page'></div>
               <div className='page'></div>
               <div className='page'></div>
               <div className='page'></div>

               <div className='imagePage'>
                  <img className='imgs' src={questions[quizIndex].url} />
               </div>
               <div className='lastPage'>
                  <div className='rightPage'>
                     <div>
                        <ProgressBar
                           className='progress'
                           completed={Math.floor((quizIndex / questions.length) * 100)}
                           bgColor='#fff'
                           baseBgColor='#f0ecdb'
                           width='300px'
                        />
                     </div>
                     <div className='book__tex__page'>
                        {endPage ? (
                           <></>
                        ) : (
                           <div className='question__page'>
                              <div className='question__title'>
                                 <span>{questions[quizIndex].questionText}</span>
                              </div>
                              <div className='question__text'>
                                 {questions[quizIndex].answerOptions.map(item => (
                                    <button className='question__btn' onClick={() => onClick(item.option)}>
                                       {item.answerText}
                                    </button>
                                 ))}
                              </div>
                           </div>
                        )}
                     </div>
                  </div>
               </div>
               <div className='coverBack'></div>
            </div>
         </div>
      </>
   );
}

export default Questions;
