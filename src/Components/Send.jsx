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
  /*
      <p><BasicForm/></p>
  <FirebaseIntegration/>
    */
  const dataRef = useRef();

  const send = async (e) => {
    console.log("teeest");
    await set(ref(firebase, "users/" + name), {
      startSleeptime: "test",
      endSleeptime: "",
      startWorktime: "",
      endWorktime: "",
    });
  };
  return (
    <>
      <div onLoad={send()}>Thank you for submitting</div>
    </>
  );
}

export default FormWorktime;
