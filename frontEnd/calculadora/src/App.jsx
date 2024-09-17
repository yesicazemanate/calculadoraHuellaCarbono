import { Formulario } from './pages/formulario'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Formulario/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
