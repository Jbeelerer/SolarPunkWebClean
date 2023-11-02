import Sheet from "react-modal-sheet";
//import QrReader from "./CustomQrReader";
import { QrReader } from "./CustomQrReaderZxing";

import { useContext, useState } from "react";
import { QRCodeFormContext } from "./QRCodeFormContext";
// import for some reason not working :/
//import { FormSwitch } from "./FormSwitch";
import Send from "./Send";
import InfoText from "./InfoText";
import FormTransportation from "../Components/FormTransportation";
import WorkForm from "../Components/Work";
import FormEnergy from "./FormEnergy";
import FormName from "./FormName";

export default function BottomDrawer() {
  const QRCodeContext = useContext(QRCodeFormContext);
  const [isOpen, setOpen] = useState(true);
  const [formContent, setFormContent] = useState("0");
  const [initialSnapP, setInitialSnapP] = useState(0);
  const [idleMode, setIdleMode] = useState(false);

  /*const onFormChange = (e) => {
    console.log(e); 
    //setFormContent({ newContent });
  };
  
  
  function onFormChange(content) {
    console.log(content);
    setFormContent({ newContent });
  }
  */

  function onFormChange(content) {
    console.log(content);
    setFormContent(content);
  }

  function onOpenQR(b) {
    setFormContent("QRCode");
    setIdleMode(false);
  }

  function manageIdleMode(val) {
    setIdleMode(val);
    setInitialSnapP(val ? 3 : 0);
    setOpen(false);
    setOpen(true);
  }
  //<button onClick={() => setOpen(true)}>Open sheet</button>
  return (
    <>
      <Sheet
        snapPoints={[0.6, 0.3, 0.1, 0]}
        initialSnap={initialSnapP}
        isOpen={isOpen}
        onSnap={(snapIndex) =>
          console.log("> Current snap point index:", snapIndex)
        }
        onClose={() => {
          setIdleMode(true);
          console.log("doNothing");
          // setOpen(true);
        }}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <FormSwitch data={formContent} />
            <QrReader
              onFormChange={onFormChange}
              onOpenQR={onOpenQR}
              idleMode={idleMode}
              setIdleMode={manageIdleMode}
            />
            {/* Your sheet content goes here */}
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </>
  );
}

const FormSwitch = (test) => {
  console.log(test.data);
  var text = test.data + "";
  switch (text) {
    case "Transportation":
      return (
        <>
          <InfoText
            title={"Arbeits-/Schulweg"}
            text={
              "Mit welchem Fortbewegungsmittel legst du wie viel Zeit zurück?"
            }
          />
          <FormTransportation />
        </>
      );
    case "Work":
      return (
        <>
          <InfoText
            title={"Arbeitszeit"}
            text={"Wie lange arbeitest du pro Wochentag?"}
          />
          <WorkForm />
        </>
      );
    case "Energy":
      return (
        <>
          <InfoText
            title={"Energie"}
            text={
              "Wie möchtest du gerne, dass dein Strom in Zukunft produziert wird?"
            }
          />
          <FormEnergy />
        </>
      );
    case "Send":
      return <Send />;
    case "name":
      return (
        <>
          <InfoText
            title={"Der Name deines Avatars"}
            text={"Gib deinem Avatar irgendeinen Namen."}
          />
          <FormName />
        </>
      );
    case "QRCode":
      return (
        <InfoText
          text={
            "Scanne die nächste Infotafel über das Thema, welches dich interessiert."
          }
        />
      );
    case "0":
      return (
        <InfoText
          title={"Schön, dass du da bist"}
          text={
            "Siehst du die grosse Sphäre auf dem Platz vor dir? Dann bist du genau richtig."
          }
        />
      );
    case "1":
      return (
        <InfoText
          title={"Zuerst"}
          text={
            "Hier auf dem Platz befinden sich  einige Stehlen zu verschiedenen persönlichen und stadtplanerischen Themen."
          }
        />
      );
    case "2":
      return (
        <InfoText
          title={"Die Enthüllung"}
          text={
            "Sobald du dich mit allen deiner Meinung nach wichtigen Themen befasst hast, kannst du in die Kugel eintreten. Lass dich überraschen."
          }
        />
      );
    default:
      return "willkommen";
  }
};
