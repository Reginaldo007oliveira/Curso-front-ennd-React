import React from "react";
import {useAuth} from "./AuthContent"
export const Login = () => {
  const { user, login, logout } = useAuth();

  return (
    <div>
      {user ? (
        <>
          <h1>Bem vindo! {user.name}</h1>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button onClick={logout}>Sair</button>
        </>

      ) : (
        <>
          <h2>Você não está logado</h2>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button onClick={() => login("Luciano")}>Login</button>
        </>
      )}
    </div>
  );
};
