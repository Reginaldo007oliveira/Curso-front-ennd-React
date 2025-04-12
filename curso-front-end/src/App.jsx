import "./App.css";
import { Header } from "./components/header";
import TextComponents from "./components/TextComponents.jsx";
import { SecondText, ThirdText } from "./components/OtherComponets.jsx";

function App() {
  return (
    <>
      <SecondText />
      <ThirdText />
      <TextComponents text="Meu Primeiro Texto" />
      <TextComponents text="Meu Segundo Texto"/>
      <TextComponents text="Agora vai"/>
      <Header />
    </>
  );
}

export default App;
