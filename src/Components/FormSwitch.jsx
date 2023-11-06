import Form1 from "../Components/FormWorktime";

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

export default FormSwitch;
