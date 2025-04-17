// Importa as bibliotecas e componentes necessários
import React from "react"; // Importa a biblioteca React
import "./App.css"; // Importa o arquivo CSS para estilização
import { ThemeProvider, useTheme } from "./components/Theme-Provider/ThemeContext"; // Importa o ThemeProvider e o hook useTheme do contexto de tema
import { Header } from "./components/Theme-Provider/Header"; // Importa o componente Header
import { Content } from "./components/Theme-Provider/Content"; // Importa o componente Content

// Componente ThemedApp que utiliza o contexto de tema
const ThemedApp = () => {
  // Usa o hook useTheme para acessar o tema atual
  const { theme } = useTheme();

  // Renderiza o aplicativo com a classe correspondente ao tema atual
  return (
    <div className={`app ${theme}`}> {/* Adiciona a classe 'app' e a classe do tema atual ao div */}
      <Header /> {/* Renderiza o componente Header */}
      <Content /> {/* Renderiza o componente Content */}
    </div>
  );
};

// Componente principal do aplicativo
function App() {
  return (
    <ThemeProvider> {/* Envolve o aplicativo com o ThemeProvider para fornecer o contexto de tema */}
      <ThemedApp /> {/* Renderiza o componente ThemedApp */}
    </ThemeProvider>
  );
}

// Exporta o componente App como padrão para que possa ser utilizado em outros arquivos
export default App;