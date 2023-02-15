import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
// import App from './components/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from '../src/pages/NotFound';
import FlipBook from '../src/pages/FlipBook';
import ResultPage from '../src/pages/ResultPage';
// import StartPage from './pages/StartPage';
import App from './components/App';

const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      ErrorElement: <NotFound />,
   },
   {
      path: '/question',
      element: <FlipBook />,
   },
   {
      path: '/result',
      element: <ResultPage />,
   },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>,
);
