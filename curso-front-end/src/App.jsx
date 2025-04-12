import "./App.css";
import { Header } from "./components/header";
import TextComponents from "./components/TextComponents.jsx";
import { SecondText, ThirdText } from "./components/OtherComponets.jsx";

function App() {
  return (
    <>
      <SecondText />
      <ThirdText />
      <TextComponents />
      <Header />
    </>
  );
}

export default App;
