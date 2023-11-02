import { useRef, useState } from "react";

function InfoText({ text, title }) {
  //
  return (
    <>
      <div className="MainTitle">{title}</div>
      <div className="infoForm">{text}</div>
    </>
  );
}

export default InfoText;
