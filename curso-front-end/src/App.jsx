import "./App.css";
import { Header } from "./components/header";
import TextComponents from "./components/TextComponents.jsx";
import { SecondText, ThirdText } from "./components/OtherComponets.jsx";
import { Events } from "./components/Events.jsx";
import { CssInline } from "./components/cssInline.jsx";
import { MyComponentcss } from "./components/MyCssComponent/MyComponentcss.jsx";
import { Counter } from "./components/Counter.jsx";
import { ProductQuantity } from "./components/ProductQuantity.jsx";
import { GitHubUser } from "./components/GitHubUser.jsx";

export default function App() {
  const cssInline = {
    color: "#df1",
    fontSize: "20px",
    backgroundColor: "#000",
  };
  return (
    <>
      <p>css escrito inline</p>
      <p style={cssInline}> Meu paragrafos</p>
      <h2>Meu componente Css texto escrito</h2>

        {/* Github User */}
        <p>GitHub User...</p>
      <GitHubUser />
      <hr />
      
      {/* insere produto no carrinho */}
      <p>insere produto no carrinho ...</p>
      <ProductQuantity />
      <hr />

      {/* Contador */}
      <p>Contador ...</p> 
      <Counter />
      <hr />

      {/* Componente Css */}
      <p>componente css</p>
      <MyComponentcss />
      <hr />

      {/* Componente Css Inline */}
      <p>componente css inline</p>
      <CssInline> </CssInline>
      <hr />

      {/* Componente Css Eventos */}
      <p>Eventos</p>
      <Events />
      <hr />

      {/* Componente Css Second text */}
      <p>Componente segundo texto</p>
      <SecondText />
      <hr />
      
      {/* Componente Css Third text */}
      <p> Componente terceiro texto</p>
      <ThirdText />
      <hr />

      {/* Texto com props */}
      <p>Texto com props</p>
      <hr />
      <TextComponents text="Meu Primeiro Texto" description="pega essa...." />
      <TextComponents text="Meu Segundo Texto" />
      <TextComponents text="Agora vai" />
      <Header />
    </>
  );
}
