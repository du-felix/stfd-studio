import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Home from "@/pages/Home"
import About from "@/pages/About"
import Cases from "@/pages/Cases"
import CaseDetail from "@/pages/CaseDetail"
import Pricing from "@/pages/Pricing"
import Inquire from "@/pages/Inquire"
import PrivacyPolicy from "@/pages/PrivacyPolicy"
import TermsOfService from "@/pages/TermsOfService"
import CookiePolicy from "@/pages/CookiePolicy"
import AdminApp from "@/admin/AdminApp"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/cases/:slug" element={<CaseDetail />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/inquire" element={<Inquire />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/admin/*" element={<AdminApp />} />
      </Routes>
    </BrowserRouter>
  )
}
