import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("pt");
    const switchLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === "pt" ? "en" : "pt"));
    }

  return ( 

   <LanguageContext.Provider value={{language, switchLanguage}}>
        {children}
   </LanguageContext.Provider>

  )
};


// Hook personalizado para usar o contexto do tema
export const useLanguage = () => useContext(LanguageContext)

  
  
