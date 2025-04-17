import React from 'react'
import { useLanguage } from './LanguageContext'

export const Header = () => {
    const { language, switchLanguage } = useLanguage()
  return (
    <header>
        <h1>
            {language === 'pt' ? 'Portugues' : 'Ingles...'}
        </h1>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button onClick={switchLanguage}>
{language === "pt"  ? "Mudar para Ingles": "kkk Portugues" }
        </button>
    </header>
  )
}
