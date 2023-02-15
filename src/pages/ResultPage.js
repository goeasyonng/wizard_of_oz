import React from "react";
import "../CSS/result.css";
export default function Result({ title, detail }) {
  console.log(detail);
  console.log(title);

  return (
    <div>
      <div>{title} </div>
      <div>
        {detail.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </div>
  );
}
