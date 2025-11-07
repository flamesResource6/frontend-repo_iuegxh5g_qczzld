import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionAbout from './components/SectionAbout';
import SectionServices from './components/SectionServices';
import SectionContact from './components/SectionContact';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0F1F] font-inter">
      <Navbar />
      <main>
        <Hero />
        <SectionAbout />
        <SectionServices />
        <SectionContact />
      </main>
    </div>
  );
}

export default App;
