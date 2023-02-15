import StartPage from '../pages/StartPage';

function App() {
   return (
      <>
         <StartPage />
      </>
   );
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Question from "../pages/QuestionPage";
import Result from "../pages/ResultPage";
import Start from "../pages/StartPage";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState([]);

  const getData = (a, b) => {
    console.log(1234, a, b);
    setTitle(a);
    setDetail(b);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Start />,
      errorElement: <NotFound />,
    },
    {
      path: "/Question",
      element: <Question getData={getData} />,
    },
    {
      path: "/Result",
      element: <Result title={title} detail={detail} />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
