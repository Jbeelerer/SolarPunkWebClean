import Spline from "@splinetool/react-spline";
import { useRef } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function Character() {
  const objectToAnimate = useRef();
  const [isSend, setIsSend] = useLocalStorageState("isSend");

  const spline = useRef();

  function onLoad(splineApp) {
    spline.current = splineApp;
  }

  function triggerAnimation() {
    if (spline.current) spline.current.emitEvent("mouseHover", "Group");
  }

  return (
    <>
      <div className="Character">
        <Spline
          scene="https://prod.spline.design/PgZOLVxpDZLgoJLZ/scene.splinecode"
          onLoad={onLoad}
        />
      </div>
      {isSend ? triggerAnimation() : ""}
    </>
  );
}
