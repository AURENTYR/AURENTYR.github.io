import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import Home from "@/pages/Home/Home";
import About from "@/pages/About/About";
import Services from "@/pages/Services/Services";
import Contact from "@/pages/Contact/Contact";
import NotFound from "@/pages/NotFound/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
