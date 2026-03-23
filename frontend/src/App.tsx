import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "@/pages/Home"
import About from "@/pages/About"
import Cases from "@/pages/Cases"
import Pricing from "@/pages/Pricing"
import Inquire from "@/pages/Inquire"
import PrivacyPolicy from "@/pages/PrivacyPolicy"
import TermsOfService from "@/pages/TermsOfService"
import CookiePolicy from "@/pages/CookiePolicy"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/inquire" element={<Inquire />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
    </BrowserRouter>
  )
}
