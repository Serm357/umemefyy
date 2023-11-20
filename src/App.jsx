import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar, Home, Calculator, Units, AboutUs } from "./components";
import Footer from "./components/Footer";

const App = () => {
  return (
    <section className="w-full h-screen font-cursive      ">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/kujua-units-unazopata" element={<Units />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </section>
  );
};

export default App;
