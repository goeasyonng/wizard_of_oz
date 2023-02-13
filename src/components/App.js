// import './App.css';
<<<<<<< HEAD
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import ResultPage from '../pages/ResultPage';
import NotFound from '../pages/NotFound';
import Question from '../pages/Question';
import Start from '../pages/StartPage';

const router = createBrowserRouter([
   {
      path: '/',
      element: <Start />,
      errorElement: <NotFound />,
   },

   {
      path: '/Question',
      element: <Question />,
   },
]);
function App() {
   return (
      <>
         <RouterProvider router={router} />
      </>
   );
=======
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookQuiz from "../pages/StartPage";
import NotFound from "../pages/NotFound";
import Question from "../pages/QuestionPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BookQuiz />,
    errorElement: <NotFound />,
  },
  {
    path: "/Question",
    element: <Question />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
>>>>>>> master
}
export default App;
