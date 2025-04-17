import React, { createContext, useState, useContext } from "react";

// Cria um contexto para o tema
export const ThemeContext = ({ Children }) => {
  // Estado para armazenar o tema atual, inicializado como "light"
  const [theme, setTheme] = useState("light");

  // Função para alternar entre os temas "light" e "dark"
  const ToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  
  return (
    <div>
      {/* Provedor do contexto, que disponibiliza o tema e a função de alternância */}
      <ThemeContext.Provider value={{ theme, ToggleTheme }}>
        {Children} {/* Renderiza os filhos que consomem o contexto */}
      </ThemeContext.Provider>
    </div>
  );
};

// Hook personalizado para usar o contexto do tema
export const useTheme = () => {
  // Obtém o contexto do ThemeContext
  const context = useContext(ThemeContext);
  
  // Lança um erro se o hook for usado fora do provedor
  if (!context) {
    throw new Error("useTheme deve ser usado com ThemeProvider");
  }
  
  return context; // Retorna o contexto para ser utilizado
};