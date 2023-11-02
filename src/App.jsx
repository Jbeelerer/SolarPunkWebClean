import "./App.css";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

//import QrReader from "./Components/CustomQrReader";
import Character from "./Components/Character";
import BottomDrawer from "./Components/BottomDrawer";

export default function App() {
  const [showTitleScreen, setShowTitleScreen] = useState(true);
  const [introOver, setIntroOver] = useLocalStorageState("introOver");
  return (
    <>
      {showTitleScreen ? (
        <>
          <div className="startContainer">
            <div className="startTitle">Willkommen</div>
            <button className="start" onClick={() => setShowTitleScreen(false)}>
              Start
            </button>
          </div>
        </>
      ) : (
        <>
          <Character />
          <BottomDrawer />
        </>
      )}
    </>
  );
}
