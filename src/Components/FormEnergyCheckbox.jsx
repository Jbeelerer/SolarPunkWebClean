import { useRef, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import useLocalStorageState from "use-local-storage-state";

function FormTransportationSlider({ EnergyType }) {
  const [rangeval, setRangeval] = useState(0);
  const [checked, setChecked] = useState(false);
  var handleChange = (v) => {};

  const [energyType, setEnergyType] = useLocalStorageState("energyType");
  function selectType() {
    setChecked(!checked);
    setEnergyType({ ...energyType, [key]: checked });
  }

  return (
    <>
      <input
        id={EnergyType + "EnergyCheckbox"}
        type="checkbox"
        className={EnergyType + " energyCheckbox"}
        checked={checked}
        hidden
      />

      <div
        onClick={selectType}
        className={
          checked ? "energyDisplaySelection selected" : "energyDisplaySelection"
        }
        id={EnergyType + "Energy"}
      >
        {EnergyType}
      </div>
    </>
  );
}

export default FormTransportationSlider;
