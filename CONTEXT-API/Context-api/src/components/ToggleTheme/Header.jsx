import React from 'react';

export const Header = ({ theme, toggleTheme }) => {
  return (
    <>
      <header>
        <h1>Design: {theme}</h1>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button onClick={toggleTheme}>Toggle</button>
      </header>
    </>
  );
};

