// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
// import Dashboard from "./components/Home";
// import TalkToMe from "./components/TalkToMe";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
//
{
  /* <BrowserRouter>
        <Routes>  
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Dashboard />} />
          <Route path="talk-to-me" element={<TalkToMe />} />
          </Routes>
      </BrowserRouter> */
}
{
  /*
   */
}

{
  /* <ButtonGradient /> */
}
//
