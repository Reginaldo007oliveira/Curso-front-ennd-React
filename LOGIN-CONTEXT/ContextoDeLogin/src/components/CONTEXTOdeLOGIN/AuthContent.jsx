import { createContext, useState, useContext } from 'react';

// Cria um contexto para autenticação
const AuthContext = createContext();

// Componente que fornece o contexto de autenticação
export const AuthProvider = ({ children }) => {
  // Estado para armazenar o usuário autenticado, inicializado como null
  const [user, setUser ] = useState(null);

  // Função para realizar o login, definindo o usuário autenticado
  const login = (username) => setUser ({ name:username });

  // Função para realizar o logout, removendo o usuário autenticado
  const logout = () => setUser (null);

  return (
    // Provedor do contexto, que disponibiliza o usuário e as funções de login e logout
    <AuthContext.Provider value={{ user, login, logout }}>
      {children} {/* Renderiza os filhos que consomem o contexto */}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar o contexto de autenticação
export const useAuth = () => {
  const context = useContext(AuthContext);
  // Verifica se o contexto está disponível
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context; // Retorna o contexto
};