import React from "react";
import quiz1 from "./assets/quiz-app1.png";
import quiz2 from "./assets/quiz-app2.png";
import home from "./assets/home.png";
import results from "./assets/results-mobile.png";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h3>Some projects of mine:</h3>
      <section className="project-container">
        <section className="content-container projects-content">
          <div className="screenshots">
            <img
              className="screenshot"
              src={quiz1}
              alt="A screenshot of the Quiz App's start menu."
            />
            <img
              className="screenshot"
              src={quiz2}
              alt="A screenshot of the feedback given to user upon answering questions."
            />
          </div>
          <div className="project-stuff">
            <h4>Quiz-App</h4>
            <p>
              In this project, the user gets a chance to test their knowledge in
              the game of Billiards/Pool. This quiz takes them through a series
              of questions and grades their performance along the way.
            </p>
            <div className="project-btns">
              <a
                className="project-btn repo-btn"
                href="https://github.com/malekadair/quiz-app.git"
                target="_blank"
              >
                Project Repo
              </a>
              <a
                className="project-btn live-btn"
                href="https://malekadair.github.io/quiz-app/"
                target="_blank"
              >
                Live Project
              </a>
            </div>
          </div>
        </section>
        <section className="content-container projects-content">
          <div className="screenshots">
            <img
              className="screenshot"
              src={home}
              alt="A screenshot of the Barhop's home screen."
            />
            <img
              className="screenshot"
              src={results}
              alt="A screenshot of the nearby bar results."
            />
          </div>
          <div className="project-stuff">
            <h4>Barhop</h4>
            <p>
              This app allows the user to easily locate and navigate to nearby
              bars based on a specific price point. Results are displayed based
              on distance (nearest to furthest) from user's coordinates.
            </p>
            <div className="project-btns">
              <a
                className="project-btn repo-btn"
                href="https://github.com/malekadair/barhop.git"
                target="_blank"
              >
                Project Repo
              </a>
              <a
                className="project-btn live-btn"
                href="https://malekadair.github.io/barhop/"
                target="_blank"
              >
                Live Project
              </a>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Projects;
