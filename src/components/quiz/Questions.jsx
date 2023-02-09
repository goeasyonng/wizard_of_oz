import React, { useState } from 'react';
import { questions } from './QuizList';

export default function Questions() {
   const [currentQuiz, setCurrentQuiz] = useState(0);
   const [score, setScore] = useState(0);
   const [showScore, setShowScore] = useState(false);

   const handleClick = isCurrent => {
      if (isCurrent) {
         setScore(score + 1);
      }

      const nextQuiz = currentQuiz + 1;

      if (nextQuiz < questions.length) {
         setCurrentQuiz(nextQuiz);
      } else {
         setShowScore(true);
      }
   };

   return (
      <>
         <div className='book__text page'>
            {showScore ? (
               <section>
                  점수야..{score} 얼마나? {questions.length}
               </section>
            ) : (
               <section className='text__page'>
                  {/* 문제 */}
                  <div>
                     <p>
                        {currentQuiz + 1}/ {questions.length}
                     </p>
                     <span>{questions[currentQuiz].questionText}</span>
                  </div>
                  {/* 선택 */}
                  <div>
                     {questions[currentQuiz].answerOptions.map(item => (
                        <button onClick={() => handleClick(item.isCorrect)}>{item.answerText}</button>
                     ))}
                  </div>
               </section>
            )}
         </div>
      </>
   );
}