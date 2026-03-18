import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import LandingPage from "./components/LandingPage"

export default function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}