import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
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
      <section>
        <Main />
      </section>
    </div>
  );
}

export default App;
