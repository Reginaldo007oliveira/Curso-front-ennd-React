import React from "react";
import { useTheme } from "./ThemeContext";

export const Header = () => {
    const{ theme, toggleTheme} = useTheme();
  return (
    <header>
      <h1> cor: {theme}</h1>
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};
