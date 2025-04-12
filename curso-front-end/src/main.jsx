import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TextComponents from "./components/TextComponents.jsx";
import { SecondText, ThirdText } from "./components/OtherComponets.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SecondText />
    <ThirdText /> 
    <TextComponents />
    <App />
  </StrictMode>
);
