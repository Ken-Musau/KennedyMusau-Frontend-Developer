import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <section>
        <Hero />
      </section>
    </div>
  );
}

export default App;
