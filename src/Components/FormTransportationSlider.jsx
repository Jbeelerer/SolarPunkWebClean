import { useRef, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import useLocalStorageState from "use-local-storage-state";

function FormTransportationSlider({ transportType }) {
  var content = "test";
  const [rangeval, setRangeval] = useState(0);
  const [transportation, setTransportation] =
    useLocalStorageState("transportation");

  const maxVal = 200;

  function outputUpdate(vol) {
    console.log("#" + transportType + "div");
    var output = document.getElementById(transportType + "div");
    let key = transportType + "";
    setTransportation({ ...transportation, [key]: rangeval });
    console.log(vol);
    console.log((output.style.left = (vol / maxVal) * 100 + "%"));
    if (output != null) output.style.left = (vol / maxVal) * 100 + "%";
  }
  /*<RangeSlider
        id={type}
        className={type + " single-thumb"}
        defaultValue={[0, 50]}
        thumbsDisabled={[true, false]}
        rangeSlideDisabled={true}
        onThumbDragEnd={(event) => setRangeval(event.target.value)}
      />*/

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
