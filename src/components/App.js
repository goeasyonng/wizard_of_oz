// import './App.css';
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
}
export default App;
