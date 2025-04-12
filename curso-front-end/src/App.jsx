import "./App.css";
import { Header } from "./components/header";
import TextComponents from "./components/TextComponents.jsx";
import { SecondText, ThirdText } from "./components/OtherComponets.jsx";
import { Events } from "./components/Events.jsx";

export default function App() {
  return (
    <>
      <Events />
      <SecondText />
      <ThirdText />
      <TextComponents text="Meu Primeiro Textoq" description="pega essa...." />
      <TextComponents text="Meu Segundo Texto" />
      <TextComponents text="Agora vai" />
      <Header />
    </>
  );
}
