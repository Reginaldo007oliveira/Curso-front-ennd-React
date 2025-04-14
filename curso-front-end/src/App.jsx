import "./App.css";
import { Header } from "./components/header";
import TextComponents from "./components/TextComponents.jsx";
import { SecondText, ThirdText } from "./components/OtherComponets.jsx";
import { Events } from "./components/Events.jsx";
import { CssInline } from "./components/cssInline.jsx";
import { MyComponentcss } from "./components/MyCssComponent/MyComponentcss.jsx";
import { Counter } from "./components/Counter.jsx";

export default function App() {
  const cssInline = {
    color:"#df1",
    fontSize:"20px",
    backgroundColor:"#000"
  };
  return (
    <>
   
    <p style={cssInline}> Meu paragrafo</p>
    <h2>Meu componente Css</h2>
    <Counter />
    <MyComponentcss />
   <CssInline> </CssInline>
     <Events />
      <SecondText  />
      <ThirdText />
      <TextComponents  text="Meu Primeiro Texto" description="pega essa...." />
      <TextComponents text="Meu Segundo Texto" />
      <TextComponents text="Agora vai" />
      <Header />
    </>
  );
}
