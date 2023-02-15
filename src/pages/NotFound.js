import { useRouteError } from "react-router-dom";
import "../CSS/error.css"
import Comeback from "../image/comeback.png"
function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page">
        <i>{error.statusText || error.message}</i>
      <h1>이런..!!</h1>
      <p>페이지가 없습니다. </p>
      <img src={Comeback} className="images" alt="돌아가" />
      <p>
      </p>
    </div>
  );
}

export default ErrorPage;
