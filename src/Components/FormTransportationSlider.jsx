import { useRef, useState } from "react";
import "react-range-slider-input/dist/style.css";
import useLocalStorageState from "use-local-storage-state";

function FormTransportationSlider({ transportType }) {
  var content = "test";
  const [rangeval, setRangeval] = useState(0);
  const [transportation, setTransportation] =
    useLocalStorageState("transportation");

  const maxVal = 200;

  function outputUpdate(vol) {
    var output = document.getElementById(transportType + "div");
    let key = transportType + "";
    setTransportation({ ...transportation, [key]: rangeval });
    if (output != null) output.style.left = (vol / maxVal) * 100 + "%";
  }

  return (
    <>
      <div className="rangeDisplayContainer">
        <div id={transportType + "div"} className="rangeDisplay">
          {rangeval} min
        </div>
      </div>
      <input
        value={rangeval}
        type="range"
        className={transportType + " custom-range"}
        min="0"
        max={maxVal}
        onChange={(event) => setRangeval(event.target.value)}
        onInput={() => outputUpdate(rangeval)}
        onClick={outputUpdate(rangeval)}
      />
    </>
  );
}

export default FormTransportationSlider;
