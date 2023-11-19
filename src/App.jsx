import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar, Home, Pay, Units, AboutUs } from "./components";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="w-full h-screen font-cursive">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kujua-malipo" element={<Pay />} />
          <Route path="/kujua-units-unazopata" element={<Units />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
