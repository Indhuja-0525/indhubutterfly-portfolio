
import React, { useState, useEffect } from "react";
import "./App.css";
import profile from "./assets/pic.png";


function SkillCard(props) {
  return (
    <div
      className="skill-card"
      onMouseEnter={() => props.setHover(props.name)}
      onMouseLeave={() => props.setHover("")}
    >
      <h3>{props.name}</h3>

      {props.hover === props.name && (
        <p className="hover-text"> My Skill</p>
      )}
    </div>
  );
}

function App() {

  const [message, setMessage] = useState("");
  const [hover, setHover] = useState("");
  const [visitor, setVisitor] = useState("");

  
  useEffect(() => {
    console.log("Welcome to Indhuja's Portfolio!");
  }, []);

 
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Python",
    "C",
    "C++",
    "GitHub",
    "Figma",
    "Canva",
    "UI/UX Design",
    "Prompt Engineering",
    "AI Tools",
    "DSA",
    "Aptitude",
    "Communication Skills"
  ];

  
  function handleClick() {
    setMessage("Thank you for visiting my portfolio! 💙");
  }

  
  function handleChange(event) {
    setVisitor(event.target.value);
  }

  return (
    <div className="portfolio">

      
      <nav>
        <h2>Indhuja.</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      
      <section id="home" className="home">

        <div className="home-text">
          <h3>Hello, Welcome to My Portfolio </h3>

          <h1>I'm <span>Indhuja</span></h1>

          <h2>Frontend Developer</h2>

          <p>
            I'm an Information Technology student
            passionate about web development,
            modern technologies and creative ideas.
          </p>

          <a href="#about" className="btn">
            About Me
          </a>
        </div>

        <div className="profile">
          <img src={profile} alt="Indhuja Profile" />
        </div>

      </section>

      
      <section id="about" className="about">

        <h1>About Me </h1>

        <p>
          Hi! I'm Indhuja, a third-year B.Tech Information
          Technology student at Mohammed Sathak AJ College
          of Engineering.

          I am passionate about frontend development,
          modern web technologies, artificial intelligence
          and creative designing.

          I enjoy learning new technologies, developing
          projects and improving my technical knowledge.

          My future ambition is to become a successful
          Full Stack Developer and get placed in a reputed
          IT company like TCS or Cognizant.

          I always believe in learning, exploring and
          improving myself every day.
        </p>

        <div className="details">

          <div>
            <h3> Graduation Year</h3>
            <p>2028</p>
          </div>

          <div>
            <h3> Department</h3>
            <p>Information Technology</p>
          </div>

          <div>
            <h3> College</h3>
            <p>Mohammed Sathak AJ College of Engineering</p>
          </div>

          <div>
            <h3>Year</h3>
            <p>Third Year</p>
          </div>

        </div>

      </section>

      
      <section id="skills" className="skills">

        <h1>My Skills </h1>

        <div className="skill-container">

          {skills.map((item, index) => (
            <SkillCard
              key={index}
              name={item}
              hover={hover}
              setHover={setHover}
            />
          ))}

        </div>

      </section>

      
      <section id="contact" className="contact">

        <h1>Contact Me </h1>

        <p>Let's connect and share new ideas!</p>

        <div className="contact-box">

          <h3> Email</h3>

          <a href="mailto:indhujasri05@gmail.com">
            indhujasri05@gmail.com
          </a>

          <h3>LinkedIn</h3>

          <a
            href="https://www.linkedin.com/in/indhuja-i-4156b5364/"
            target="_blank"
            rel="noreferrer"
          >
            Visit My LinkedIn
          </a>

        </div>

        <div className="visitor-box">

          <h3>Leave Your Name</h3>

          <input
            type="text"
            placeholder="Enter your name"
            value={visitor}
            onChange={handleChange}
          />

          <button onClick={handleClick}>
            Say Hello 
          </button>

          <p>
            {message && `${message} ${visitor}`}
          </p>

        </div>

      </section>

     
      <footer>
        <p>© 2026 Indhuja | Designed with love</p>
      </footer>

    </div>
  );
}

export default App;
