import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <main className="">
        <div className="">
          <Navbar />
          </div>
        <div className=" h-screen" id="home">
          <Hero />
          </div>
        <div id="portfolio">
          <Portfolio />
          
          </div>
          <div id="contact">
            <Contact />
          </div>
    </main>
  )
}
