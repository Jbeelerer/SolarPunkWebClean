import { useRef, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import FormTransportationSlider from "./FormTransportationSlider";
import useLocalStorageState from "use-local-storage-state";

function FormTransportation() {
  const [isSend, setIsSend] = useState(false);

  const submithandler = async (e) => {
    e.preventDefault();
    setIsSend(true);
  };

  return (
    <>
      {!isSend ? (
        <div className="infoForm Form2">
          <form onSubmit={submithandler}>
            <FormTransportationSlider transportType="walking" />
            <FormTransportationSlider transportType="bicicle" />
            <FormTransportationSlider transportType="publicTransport" />
            <FormTransportationSlider transportType="car" />
          </form>
        </div>
      ) : (
        <div>Thank you for submitting</div>
      )}
    </>
  );
}

export default FormTransportation;
