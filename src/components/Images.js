import React, { useState } from 'react';
import '../CSS/image.css';
import { questions } from '../data/QuizList';

export default function Images() {
   // 로직 나누면 여기다
   const [quizIndex, setQuizIndex] = useState(0);

   return <div className='images'>{/* <img className='imgs' src={questions[quizIndex].url} /> */}</div>;
}
