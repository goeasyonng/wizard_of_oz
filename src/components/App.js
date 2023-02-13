// import './App.css';
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
}
export default App;
