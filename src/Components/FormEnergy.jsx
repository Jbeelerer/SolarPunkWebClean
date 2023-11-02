import { useRef, useState } from "react";
import "react-range-slider-input/dist/style.css";
import FormEnergyCheckbox from "./FormEnergyCheckbox";

function FormEnergy() {
  return (
    <>
      <form>
        <FormEnergyCheckbox EnergyType="wind" />
        <FormEnergyCheckbox EnergyType="solar" />
        <FormEnergyCheckbox EnergyType="water" />
        <FormEnergyCheckbox EnergyType="erde" />
      </form>
    </>
  );
}

export default FormEnergy;
