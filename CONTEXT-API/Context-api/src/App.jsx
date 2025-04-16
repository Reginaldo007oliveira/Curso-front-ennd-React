import { useState } from 'react'; // Importa o hook useState do React para gerenciar o estado
import './App.css'; // Importa o arquivo CSS para estilização do aplicativo
import { Header } from './components/ToggleTheme/Header'; // Importa o componente Header
import { Content } from './components/ToggleTheme/Content'; // Importa o componente Content

function App() {
  const [theme, setTheme] = useState("light");

  // Função para alternar entre os temas "light" e "dark"
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    // Aplica a classe 'app' e a classe do tema atual ao div principal
    <div className={`app ${theme}`}>
      {/* Renderiza o componente Header, passando o tema e a função de alternância como props */}
      <Header theme={theme} toggleTheme={toggleTheme} />
      {/* Renderiza o componente Content, passando o tema como prop */}
      <Content theme={theme} />
    </div>
  );
}

// Exporta o componente App como padrão para ser utilizado em outros arquivos
export default App;