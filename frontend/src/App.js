import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Stats } from "@/components/sections/Stats";
import { VisiMisi } from "@/components/sections/VisiMisi";
import { Programs } from "@/components/sections/Programs";
import { PPDB } from "@/components/sections/PPDB";
import { News } from "@/components/sections/News";
import { Achievements } from "@/components/sections/Achievements";
import { Footer } from "@/components/sections/Footer";

const Landing = () => {
  return (
    <main data-testid="landing-page" className="min-h-screen bg-cream-50">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <VisiMisi />
      <Programs />
      <PPDB />
      <News />
      <Achievements />
      <Footer />
    </main>
  );
};

function App() {
  return (
    <div className="App">
      <Toaster
        position="top-right"
        richColors
        toastOptions={{
          style: { fontFamily: '"Plus Jakarta Sans", sans-serif' },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
