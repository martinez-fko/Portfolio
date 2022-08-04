import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./pages/Header";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <main>
        <Skills />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default App;
