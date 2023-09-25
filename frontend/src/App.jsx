import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importa el JavaScript de Bootstrap

import '@fortawesome/fontawesome-free/css/all.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ReservationPage } from "../pages/ReservationPage"
import { ReservationFormPage } from "../pages/ReservationFormPage"
import { Navigation } from "../components/NavigationComponent"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <BrowserRouter>

      <Navigation />

      <Routes>
        <Route path="/reservations" element={<ReservationPage />} />
        <Route path="/reservation-form" element={<ReservationFormPage />} />
        <Route path="/reservation-form/:id" element={<ReservationFormPage />} />
        <Route path="/" element={<ReservationPage />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App

