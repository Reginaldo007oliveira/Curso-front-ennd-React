import React from "react";
import { useTheme } from "./ThemeContext";

export const Content = () => {
    const{ theme} = useTheme();
  return (
    <main>
<p> The current theme is {theme}</p>
    </main>
  );
};
