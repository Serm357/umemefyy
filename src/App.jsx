import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar, Home, Calculator, AboutUs } from "./components";
import Footer from "./components/Footer";

const App = () => {
  return (
    <section className="w-full h-screen  ">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </section>
  );
};

export default App;
