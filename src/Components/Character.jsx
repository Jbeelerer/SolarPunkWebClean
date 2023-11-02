import Spline from "@splinetool/react-spline";
import { useRef } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function Character() {
  //spline.current.emitEvent("mouseHover", "Avatar");
  const objectToAnimate = useRef();
  const [isSend, setIsSend] = useLocalStorageState("isSend");

  /* function onLoad(spline) {
    const obj = spline.findObjectByName("Sphere");
    // save the object in a ref for later use
    console.log(obj);
    objectToAnimate.current = obj;
    obj.emitEvent("mouseHover");
    // triggerAnimation();
  }

  function triggerAnimation() {
    console.log(objectToAnimate);
    console.log("REEEE");
    objectToAnimate.current.emitEvent("mouseHover");
  }*/
  const spline = useRef();

  function onLoad(splineApp) {
    // save the app in a ref for later use
    spline.current = splineApp;
    // triggerAnimation();
  }

  function triggerAnimation() {
    console.log("teest");
    if (spline.current) spline.current.emitEvent("mouseHover", "Group");
    // document.dispatchEvent(new Event("keypress", { keyCode: "g" }));
  }

  return (
    <>
      <div className="Character">
        <Spline
          // scene="https://prod.spline.design/BcihbJXGj5YQ-xLb/scene.splinecode"
          scene="https://prod.spline.design/PgZOLVxpDZLgoJLZ/scene.splinecode"
          onLoad={onLoad}
        />
      </div>
      {isSend ? triggerAnimation() : ""}
    </>
  );
}
