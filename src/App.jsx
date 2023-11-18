import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  return (
    <main className="w-full h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/umeme-calc" element={"calc"} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
