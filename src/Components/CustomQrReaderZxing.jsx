import { useState } from "react";
import { useZxing } from "react-zxing";

export function QrReader({ onFormChange, showQr }) {
  // const [result, setResult] = useState("");

  const { ref } = useZxing({
    onDecodeResult(result) {
      onFormChange(result.getText());
    },
  });

  return (
    <>
      <div className={showQr ? "qrWindow isOpen" : "qrWindow"}>
        <video ref={ref} />
      </div>
    </>
  );
}
