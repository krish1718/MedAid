import { HashRouter as Router } from "react-router-dom";
import "./App.css";
import Footer from "./Application/Footer";
import Header from "./Application/Header";
import Navigation from "./Navigation/Navigation";
import VoiceAssistant from "./VoiceAssistant";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navigation />
        <Footer />
        {/* <VoiceAssistant /> */}
      </Router>
    </div>
  );
}

export default App;
