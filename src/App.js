import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';
import styled from "styled-components";


const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  useEffect(() => {
    
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".cursor-circle");

    const colors = [
    "#0f3fc4",
    "#1753f7",
    "#2b4f79",
    "#394992",
    "#465997",
    "#325c6d",
    "#3776ff",
    "#3a78ff",
    "#3a63bd",
    "#6594bb",
    "#5d8aec",
    "#5c8be3",
    "#6f8ebd",
    "#6b90a8",
    "#8cbada",
    "#61bff5",
    "#5ea9ef",
    "#6bfff8",
    "#69e7fd",
    "#63cef8",
    "#3bd8ff",
    "#ecececc0"
    ];

    circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
    });

    window.addEventListener("mousemove", function(e){
    coords.x = e.clientX;
    coords.y = e.clientY;
    
    });

    function animateCircles() {
    
    let x = coords.x;
    let y = coords.y;
    
    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        
        circle.style.scale = (circles.length - index) / circles.length;
        
        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.5;
        y += (nextCircle.y - y) * 0.5;
    });
    
    requestAnimationFrame(animateCircles);
    }

    animateCircles();



    }, [])
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            
      <Router >
      
        <Navbar />
        <Body>
        <div class="cursor-circle "></div>
            <div class="cursor-circle "></div>
            <div class="cursor-circle "></div>
            <div class="cursor-circle "></div>
            <div class="cursor-circle "></div>
            <div class="cursor-circle "></div>
            <div class="cursor-circle "></div>
            <div class="cursor-circle "></div>
            <div class="cursor-circle "></div>
            <div class="cursor-circle "></div>
            <div class="cursor-circle "></div>
            <div class="cursor-circle "></div>
            <div class="cursor-circle "></div>
            <div class="cursor-circle "></div>
            <div class="cursor-circle "></div>
            <div class="cursor-circle "></div>
            <div class="cursor-circle "></div>
            <div class="cursor-circle "></div>
            <div class="cursor-circle "></div>
            <div class="cursor-circle "></div>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
        </Body>
        {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
      </Router>
    </ThemeProvider>
  );
}

export default App;