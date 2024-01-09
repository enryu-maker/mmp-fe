import { Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Header from "./Components/Header";
import Properties from "./Screens/Properties";
import About from "./Screens/About";
import Blog from "./Screens/Blog";
import Contact from "./Screens/Contact";
import Footer from "./Components/Footer";
export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>

  )
}