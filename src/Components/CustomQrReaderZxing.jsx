import { useState } from "react";
import { useZxing } from "react-zxing";
import useLocalStorageState from "use-local-storage-state";

export function QrReader({ onFormChange, onOpenQR, idleMode, setIdleMode }) {
  const [displayQR, setdisplayQR] = useState(false);
  const [text, setText] = useState(0);
  const [introOver, setIntroOver] = useLocalStorageState("introOver");
  // const [result, setResult] = useState("");

  const { ref } = useZxing({
    onDecodeResult(result) {
      setText(result.getText());
      onFormChange(result.getText());
      setdisplayQR(false);
    },
  });

  const [number, setNumber] = useState(1);

  function increaseNumber() {
    setNumber(number + 1);
  }

  return (
    <>
      <div className={displayQR ? "qrWindow isOpen" : "qrWindow"}>
        <video ref={ref} />
      </div>
      <div className={displayQR ? "QRCodeContainer isOpen" : "QRCodeContainer"}>
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
            if (displayQR) {
              console.log("clooose");
              setIdleMode(true);
              setdisplayQR(false);
            } else {
              if (!introOver) {
                if (number < 3) {
                  onFormChange(number);
                  setdisplayQR(false);
                } else if (number == 3) {
                  onFormChange("name");
                  setdisplayQR(false);
                } else if (number == 4) {
                  setIdleMode(true);
                  setIntroOver(true);
                }
              } else {
                setIdleMode(false);
                setdisplayQR(true);
                onOpenQR(displayQR);
              }
            }
          }}
          className={idleMode ? "idle QRCodeButton" : "QRCodeButton"}
        >
          {displayQR ? "" : idleMode ? "Scannen" : "Weiter"}
        </button>
      </div>
    </>
  );
}
