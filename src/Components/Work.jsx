import { createElement, useRef, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import FormTransportationSlider from "./FormTransportationSlider";
import useLocalStorageState from "use-local-storage-state";

function WorkForm() {
  const maxVal = 18;
  const [rangeval, setRangeval] = useState(0);
  const [workingHours, setWorkingHours] = useLocalStorageState("workingHours");

  function outputUpdate(vol) {
    var output = document.getElementById("workingHours");
    setWorkingHours(rangeval);
    if (output != null) output.style.left = (rangeval / maxVal) * 100 + "%";
  }

  let stack1 = [];
  let stack2 = [];

  for (let i = 0; i < rangeval; i++) {
    if (i % 2 == 0) {
      stack1[i] = createElement("div", { className: "stack" });
    } else {
      stack2[i] = createElement("div", { className: "stack" });
    }
  }
  return (
    <>
      <div className="workDisplay">
        <div className="stackContainer stack1">{stack1}</div>
        <div className="workerIcon"></div>
        <div className="stackContainer stack2">{stack2}</div>
        <div className="table"></div>
      </div>
      <div className="infoForm Form3">
        <form onSubmit={submithandler}>
          <div className="rangeDisplayContainer">
            <div id="workingHours" className={"rangeDisplay"}>
              {rangeval}h/Tag
            </div>
          </div>

          <input
            oninput={() => outputUpdate(value)}
            value={rangeval}
            type="range"
            className={"custom-range"}
            min="0"
            max={maxVal}
            onChange={(event) => setRangeval(event.target.value)}
            onInput={() => outputUpdate(rangeval)}
            onClick={outputUpdate(rangeval)}
          />
        </form>
      </div>
    </>
  );
}

export default WorkForm;
