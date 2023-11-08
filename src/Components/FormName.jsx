import { createElement, useRef, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import FormTransportationSlider from "./FormTransportationSlider";
import useLocalStorageState from "use-local-storage-state";

function FormName() {
  const [name, setName] = useLocalStorageState("name");
  const maxVal = 18;
  const [val, setVal] = useState("");
  const [isSend, setIsSend] = useState(false);

  const submithandler = async (e) => {
    e.preventDefault();
    setIsSend(true);
  };
  return (
    <>
      <div className="infoForm Form0">
        <form onSubmit={submithandler}>
          <input
            id="nameInput"
            onInput={() => {
              setName(document.getElementById("nameInput").value);
            }}
            type="text"
            className={""}
            placeholder={"name"}
          />
        </form>
      </div>
    </>
  );
}

export default FormName;
