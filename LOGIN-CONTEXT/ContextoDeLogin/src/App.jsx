
import './App.css'
import { AuthProvider } from './components/CONTEXTOdeLOGIN/AuthContent'
import { Login } from './components/CONTEXTOdeLOGIN/Login'

function App() {
  

  return (
    <>
     <AuthProvider>
      <Login />
     </AuthProvider>
    </>
  )
}

export default App
