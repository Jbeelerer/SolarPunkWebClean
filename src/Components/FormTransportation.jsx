import { useRef, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import FormTransportationSlider from "./FormTransportationSlider";
import useLocalStorageState from "use-local-storage-state";

function FormTransportation() {
  /*
      <p><BasicForm/></p>
  <FirebaseIntegration/>
    */
  const [isSend, setIsSend] = useState(false);

  const submithandler = async (e) => {
    e.preventDefault();
    setIsSend(true);
  };
  var changeHandler = (v) => {
    if (v != null) {
      document.getElementById(v + "Amount").value =
        document.getElementById(v).value;
    }
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
