import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { DisplayMode } from "./DisplayMode.jsx";

export function MainButton({
  onFormChange,
  onOpenQR,
  displayMode,
  setDisplayMode,
}) {
  const [introOver, setIntroOver] = useLocalStorageState("introOver");
  const [number, setNumber] = useState(1);

  function increaseNumber() {
    setNumber(number + 1);
  }

  return (
    <>
      <div
        className={
          displayMode == DisplayMode.displayQR
            ? "QRCodeContainer isOpen"
            : "QRCodeContainer"
        }
      >
        {!introOver && number <= 3 && number != 0 ? (
          <div className="pagenumberContainer">
            <div className={number == 1 ? "active" : ""}>1</div>
            <div className={number == 2 ? "active" : ""}>2</div>
            <div className={number == 3 ? "active" : ""}>3</div>
          </div>
        ) : (
          ""
        )}
        <button
          onClick={() => {
            increaseNumber();

            if (displayMode == DisplayMode.closed) {
              setDisplayMode(DisplayMode.displayForm);
            } else if (displayMode == DisplayMode.displayQR) {
              setDisplayMode(DisplayMode.idle);
            } else {
              if (!introOver) {
                if (number < 3) {
                  onFormChange(number);
                  setDisplayMode(DisplayMode.displayForm);
                } else if (number == 3) {
                  onFormChange("name");
                  setDisplayMode(DisplayMode.displayForm);
                } else if (number == 4) {
                  setDisplayMode(DisplayMode.idle);
                  setIntroOver(true);
                }
              } else {
                setDisplayMode(DisplayMode.displayQR);
                onOpenQR();
              }
            }
          }}
          className={
            displayMode == DisplayMode.idle
              ? "idle QRCodeButton"
              : displayMode == DisplayMode.closed
              ? "QRCodeButton closed"
              : "QRCodeButton"
          }
        >
          {displayMode == DisplayMode.idle
            ? "Scannen"
            : displayMode == DisplayMode.displayForm
            ? "Weiter"
            : displayMode == DisplayMode.closed
            ? "Öffnen"
            : ""}
        </button>
      </div>
    </>
  );
}
