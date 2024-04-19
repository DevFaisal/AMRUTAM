import HomePage from './Pages/HomePage'
import FindPage from './Pages/FindPage'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FindPage />} />
        <Route path="/doc" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
