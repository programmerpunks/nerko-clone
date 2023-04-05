import "./App.css";
import Faq from "./components/faqs/Index";
import Footer from "./components/footer/Index";
import StartMinting from "./components/startMinting/Index";

function App() {
  return (
    <div className="bg-[#110635]">
      <Faq />
      <StartMinting />
      <Footer />
    </div>
  );
}

export default App;
