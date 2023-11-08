import { useRef, useState } from "react";
import { ref, set } from "@firebase/database";
import { firebase } from "../firebase_setup/firebase";
import useLocalStorageState from "use-local-storage-state";

function FormWorktime() {
  const [isSend, setIsSend] = useLocalStorageState("isSend");
  const [transportation, setTransportation] =
    useLocalStorageState("transportation");
  const [name, setName] = useLocalStorageState("name");
  const [workingHours, setWorkingHours] = useLocalStorageState("workingHours");
  const [energyType, setEnergyType] = useLocalStorageState("energyType");
  const dataRef = useRef();

  const send = async (e) => {
    setIsSend(true);
    await set(ref(firebase, "users/" + name), {
      workingHours: workingHours,
      transportation: transportation != null ? { transportation } : {},
      energy: energyType != null ? { energyType } : {},
    });
  };
  return (
    <>
      <div onLoad={send()}>Thank you for submitting</div>
    </>
  );
}

export default FormWorktime;
