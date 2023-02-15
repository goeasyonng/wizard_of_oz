import React from "react";

export default function Result({ title, detail }) {
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
