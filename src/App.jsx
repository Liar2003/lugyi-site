// ...existing code...

import "./App.css";
import Navbar from "./component/Navbar";
import ImageSlider from "./component/ImageSlider";
// TODO: Rename Component.jsx to a more descriptive name (e.g., HeroSection.jsx) for clarity
import Roadmap from "./component/Roadmap";
import BubbleFlame from "./component/BubleFrame";
import "./component/bublecss.css";
import Footer from "./component/Footer";
import { Analytics } from "@vercel/analytics/react";
import DownloadSection from "./component/Download";
import Component from "./component/HeroSection";
import HeroNavbar from "./component/HeroNavbar"; // Import the HeroNavbar component
function App() {
  // ...existing code...

  return (
    <>
      <Analytics />
      <div className="block bg-neutral-100">
        {/* <Navbar /> */}
        <HeroNavbar />
        <Component />
        <section id="feature" className="h-[80%] w-full bg-green-300">
          <div className="feature flex flex-col items-center justify-center h-screen">
            <h2 className="text-4xl font-bold mb-5">Supported Sites</h2>
            <div className="container grid  grid-cols-3 grid-rows-2 gap-9 m-5">
              <div className=" justify-self-end flex flex-col items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRv4fPcIck9HZx1fMFxWf3YVCeaWnMXI9UlQ&s"
                  width="45px"
                  height="45px"
                />
                <span className="mt-2">MediaFire</span>
              </div>
              <div className="justify-self-center flex flex-col items-center">
                <img
                  src="https://cdn-b.saashub.com/images/app/service_logos/207/s9jq1m524ucx/large.png?1649421647"
                  width="45px"
                  height="45px"
                />
                <span>Stream tape</span>
              </div>
              <div className="justify-self-start flex flex-col items-center">
                <img
                  src="https://www.iclarified.com/images/news/51436/242907/242907-128.png"
                  width="45px"
                  height="45px"
                />
                <span>Mega.nz</span>
              </div>

              <div className="col-span-3 justify-self-stretch flex items-center justify-center gap-20">
                <div className="item flex flex-col justify-center items-center">
                  <img src="https://movearnpre.com/static/images/logo.svg" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <DownloadSection />
        {/* <section id="intro" className="w-full block bg-blue-400 ">
          <Roadmap />
        </section> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
