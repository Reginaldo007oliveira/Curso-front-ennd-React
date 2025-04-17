import React from "react";
import { useTheme } from "./ThemeContext";

export const Header = () => {
    const{ theme, toggleTheme} = useTheme();
  return (
    <header>
      <h1> App Theme: {theme}</h1>
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};
