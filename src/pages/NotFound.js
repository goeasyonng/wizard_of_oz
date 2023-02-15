import { useRouteError } from "react-router-dom";
import "../CSS/error.css"

function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page">
        <i>{error.statusText || error.message}</i>
      <h1>이런..!!</h1>
      <p>페이지가 없습니다. </p>
      <img src="../image/comeback.png" />
      <p>
      </p>
    </div>
  );
}

export default ErrorPage;
