import AboutMe from "./components/AboutMe";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <section
          id="home"
          className="min-h-screen flex items-center bg-linear-to-r from-[#4d3259] via-[#141e34] to-[#121c33] py-10 sm:py-16"
        >
          <Intro></Intro>
        </section>
        <AboutMe></AboutMe>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
