import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Resume from "./components/resume/resume";
import Parallax from "./components/parallax/Parallax";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id = "Work Experience">
      <Resume/>
    </section>
    <section id="Side Projects"><Parallax type="side projects"/></section>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
