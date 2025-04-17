import { useState } from 'react'
import './App.css'
import { LanguageProvider } from './assets/components/LanguageComponents/LanguageContext'
import { Header } from './assets/components/LanguageComponents/Header'

function App() {
 

  return (
    <>
     <LanguageProvider>
      <Header />
     </LanguageProvider>
    </>
  )
}

export default App
