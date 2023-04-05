import "./App.css";
import ArtistTeam from "./components/artistTeam/ArtistTeam";
import Faq from "./components/faqs/Index";
import Footer from "./components/footer/Index";
import StartMinting from "./components/startMinting/Index";

function App() {
  return (
    <div className="bg-[#110635]">
      <ArtistTeam />
      <Faq />
      <StartMinting />
      <Footer />
    </div>
  );
}

export default App;
