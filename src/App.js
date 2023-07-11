import avaTom from "./img/avaTom.png";
import scrollImage from "./img/GTT.png";
import "./App.css";
import { Link } from "react-scroll";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Project from "./Components/Projects/project";
import { useEffect, useState } from "react";

export default function App() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY >= 200 ? setScroll(true) : setScroll(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="App" style={{ backgroundColor: "#041C32"}}>
      <header className="nav" style={{position: 'fixed'}}>
        <nav className="nav__container__actions">
          <div style={{ textAlign: "left" }}>
            <img
              alt=""
              src={avaTom}
              className="ava"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            />
          </div>
          <ul>
            <li>
              <Link activeClass="active" smooth spy to="home">
                HOME
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="pro">
                PROJECT
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="contact">
                CONTACT ME
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="pro">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
      {scroll && (
        <img
          alt=""
          src={scrollImage}
          style={{ width: "40px" }}
          className="btnScroll"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        />
      )}
    </div>
  );
}
