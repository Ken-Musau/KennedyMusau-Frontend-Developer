import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />
        <Main />
      </main>

      <Footer />
    </div>
  );
}

export default App;
