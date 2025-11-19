import "./homepage.css";
import React, { useRef, useState, useEffect } from "react";
import { VerticalTimeline } from "./VerticalTimeline";
import { VerticalTimelineElement } from "./VerticalTimelineElement";
import { TabMenu } from "primereact/tabmenu";
import "./style.min.css";

export default function HomePage() {
  const [displayTerminal, setDisplayTerminal] = useState(false);

  const items = [
    { label: "Home", icon: "pi pi-fw pi-home", url: "/" },
    { label: "Projects", icon: "pi pi-fw pi-briefcase", url: "/projects" },
    { label: "Music", icon: "pi pi-fw pi-music", url: "/music" },
  ];

  return (
    <>
      <div id="homepage">
        {/* <ul>
          <li>
            <a href="#home" class="active">
              Home
            </a>
          </li>
          {/* <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li styles="float:right">
            <text>Contact me at evanteal15@gmail.com</text>
          </li>
        </ul> */}
        <div className="sec1">
          <div id="leftSection">
            <img alt="My Headshot" id="headshot" src="/headshot.jpg" />
            <div id="social-links">
              <a
                href="https://github.com/evanteal15"
                target="_blank"
                rel="noreferrer"
              >
                <img alt="My GitHub" class="minilink" src="/github_logo.png" />
              </a>

              <a
                href="https://www.linkedin.com/in/evan-teal-884749250/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="My LinkedIn"
                  class="minilink"
                  src="/linkedin_logo.png"
                />
              </a>
            </div>
          </div>

          <div id="about-me">
            <h1 style={{ textAlign: "center" }}>About me</h1>
            <p>
              Hello everyone! My name is Evan Teal and I am a senior at the
              University of Michigan studying Computer Science and Data Science.
              I love working on machine learning and web development projects.
              This website serves as a portfolio of my work and a way to get in
              touch with me.
            </p>
            <p>
              Outside of work and school, I love staying active by lifting,
              climbing, and swimming (I am an active member of Michigan Club
              Swimming) and I also love playing pickleball and basketball. I am
              also a huge music listener and you can check out some music live
              been listening to lately in the music tab. I also love being in
              nature doing hiking and traveling and fun fact I have visited 45
              states and 6 countries!
            </p>
            <h2 style={{ textAlign: "center" }}>Skills/Languages</h2>
            <div id="skills">
              <div class="skill">Python</div>
              <div class="skill">C++</div>
              <div class="skill">JavaScript</div>
              <div class="skill">React</div>
              <div class="skill">SQL</div>
              <div class="skill">HTML/CSS</div>
              <div class="skill">Numpy</div>
              <div class="skill">JAX</div>
              <div class="skill">PyTorch</div>
              <div class="skill">Pandas</div>
              <div class="skill">C#</div>
              <div class="skill">Java</div>
              <div class="skill_soft">Communication</div>
              <div class="skill_soft">Leadership</div>
              <div class="skill_soft">Problem Solving</div>
            </div>
          </div>
        </div>
      </div>
      <div id="education"></div>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        Professional/Educational History
      </h1>
      <div id="timeline">
        <VerticalTimeline lineColor={"brown"}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2022"
            icon={
              <img
                src="./ln_logo.png"
                alt="Loy Norrix Logo"
                style={{
                  width: "100%",
                  height: "100%",
                  scale: "0.95",
                  marginTop: "3px",
                  borderRadius: "25px",
                  objectFit: "cover",
                }}
              />
            }
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Loy Norrix High School
            </h3>
            {/* <p>Highly involved in varsity swimming. Graduated 3rd in class.</p> */}
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2022"
            line
            icon={
              <img
                src="./kamsc_logo.jpg"
                alt="KAMSC Logo"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "25px",
                  objectFit: "cover",
                }}
              />
            }
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Kalamazoo Area Math and Science Center (KAMSC)
            </h3>
            {/* <p>
              Specialized high school for math and science. Took college level
              courses in calculus, physics, biology, and computer science. Took
              part in student led research projects each year.
            </p> */}
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2022"
            icon={
              <img
                src="./Block_M-Hex.png"
                alt="Block M"
                style={{
                  width: "70%",
                  height: "50%",
                  marginLeft: "9px",
                  marginTop: "14px",
                }}
              />
            }
            iconStyle={{ background: "rgba(29, 80, 158, 1)", color: "#fff" }}
            contentStyle={{ border: "2px solid #000", backgroundColor: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              University of Michigan Ann Arbor
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              B.S. Computer Science & Data Science
            </h4>
            {/* <p>
              Focused on machine learning and data science. Involved in various
              projects and research.
            </p> */}
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2024 - August 2024"
            icon={
              <img
                src="./hkust_logo.png"
                alt="HKUST Logo"
                style={{
                  width: "70%",
                  height: "100%",
                  scale: "0.85",
                  marginLeft: "9px",
                  objectFit: "cover",
                }}
              />
            }
            iconStyle={{ background: "rgba(224, 232, 238, 1)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Hong Kong University of Science and Technology
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Summer Study Abroad Program
            </h4>
            <p>
              Participated in an 11 week study abroad program in Hong Kong. Took
              course work in database management and digital platforms while
              making friends and connections from all over the world.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2025 - August 2025"
            icon={
              <img
                src="./Block_M-Hex.png"
                alt="Block M"
                style={{
                  width: "70%",
                  height: "50%",
                  marginLeft: "9px",
                  marginTop: "14px",
                }}
              />
            }
            iconStyle={{ background: "rgba(29, 80, 158, 1)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              University of Michigan - Center for Naval Research and Education
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Research Assistant Summer Internship
            </h4>
            <p>
              Participated in an 11 week internship program conducting research
              with faculty from the University of Michigan on a
              multidisciplinary project investigating differentiable monte carlo
              methods for particle simulations.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="August 2025 - Present"
            icon={
              <img
                src="./Block_M-Hex.png"
                alt="Block M"
                style={{
                  width: "70%",
                  height: "50%",
                  marginLeft: "9px",
                  marginTop: "14px",
                }}
              />
            }
            iconStyle={{ background: "rgba(29, 80, 158, 1)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Michigan Data Science Team
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Project Lead - Shazam Clone Subteam
            </h4>
            <p>
              Co-lead a team of 20 members to build an application that can
              identify songs from recorded audio clips using Shazam's
              constellation mapping algorithm.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}
