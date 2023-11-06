import Sheet from "react-modal-sheet";
import { QrReader } from "./CustomQrReaderZxing";
import { useContext, useState } from "react";
import { QRCodeFormContext } from "./QRCodeFormContext";
import { MainButton } from "./MainButton";
// import for some reason not working :/
//import { FormSwitch } from "./FormSwitch";
import Send from "./Send";
import InfoText from "./InfoText";
import FormTransportation from "../Components/FormTransportation";
import WorkForm from "../Components/Work";
import FormEnergy from "./FormEnergy";
import FormName from "./FormName";
import { DisplayMode } from "./DisplayMode.jsx";

export default function BottomDrawer() {
  const QRCodeContext = useContext(QRCodeFormContext);
  const [isOpen, setOpen] = useState(true);
  const [formContent, setFormContent] = useState("0");
  const [initialSnapP, setInitialSnapP] = useState(1);
  const [displayMode, setDisplayMode] = useState(DisplayMode.displayForm);

  function onFormChange(content) {
    console.log(content);
    setDisplayMode(DisplayMode.displayForm);
    setOpen(true);
    if (content == "Transportation") {
      setInitialSnapP(0);
    } else if (content == "Send") {
      setInitialSnapP(4);
    }
    setFormContent(content);
  }

  function onOpenQR() {
    setFormContent("QRCode");
    setDisplayMode(DisplayMode.displayQR);
  }

  function manageDisplayMode(val) {
    setDisplayMode(val);
    setInitialSnapP(val == DisplayMode.idle ? 4 : 1);
    setOpen(false);
    setOpen(true);
  }
  return (
    <>
      {console.log(displayMode)}
      <Sheet
        snapPoints={[0.8, 0.6, 0.3, 0.1, 0]}
        initialSnap={initialSnapP}
        isOpen={displayMode != DisplayMode.idle}
        onSnap={(snapIndex) =>
          console.log("> Current snap point index:", snapIndex)
        }
        onClose={() => {
          setDisplayMode(DisplayMode.idle);
        }}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <FormSwitch data={formContent} />
            <QrReader
              onFormChange={onFormChange}
              showQr={formContent == "QRCode"}
            />
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
      <MainButton
        onFormChange={onFormChange}
        onOpenQR={onOpenQR}
        displayMode={displayMode}
        setDisplayMode={manageDisplayMode}
      />
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
