import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { VisiMisi } from "@/components/sections/VisiMisi";
import { Stats } from "@/components/sections/Stats";
import { Programs } from "@/components/sections/Programs";
import { Footer } from "@/components/sections/Footer";

const Landing = () => {
  return (
    <main data-testid="landing-page" className="min-h-screen bg-clay-50">
      <Navbar />
      <Hero />
      <About />
      <VisiMisi />
      <Stats />
      <Programs />
      <Footer />
    </main>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
