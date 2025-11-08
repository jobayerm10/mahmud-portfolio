import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <Intro></Intro>
        <ThemeSwitcher></ThemeSwitcher>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
