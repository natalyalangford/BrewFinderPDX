import React from "react";
import "../styles/app.css";
import "../styles/home.css";

export default function About() {
  return (
    <section className="page">
      <header className="page-header">
        <h1 className="page-title script-heading">About BrewFinderPDX</h1>
        <p className="page-intro">
          A cozy little dashboard built for my Front End Web Development class,
          combining my love for coffee and Portland.
        </p>
      </header>

      <div className="about-grid">
        {/* about the project */}
        <article className="about-card">
          <h2>About the Project</h2>
          <p>
            BrewFinderPDX is a front end dashboard that helps you explore coffee
            shops across Portland. It uses the Google Places API to pull in real
            cafés, ratings, price levels, and review counts, and then visualizes
            that data in a way that feels like a cozy café menu instead of a dry
            spreadsheet.
          </p>
          <ul>
            <li>Café directory with search and filters</li>
            <li>Neighborhood-based metrics using live API data</li>
            <li>
              Responsive layout and an intentionally warm coffee-shop theme
            </li>
          </ul>
          <p className="about-note">
            This project was built as my final for a Front-End Web Development
            course, focusing on React, routing, APIs, and data visualization.
          </p>
        </article>

        {/* about the class n tech section */}
        <article className="about-card">
          <h3>Additional project details</h3>
          <p>
            BrewFinderPDX was built with modern front-end tools covered in this
            course:
          </p>
          <ul>
            <li>React + React Router for page structure and navigation</li>
            <li>
              Google Maps JavaScript API (Places library) for live café data
            </li>
            <li>Chart.js + react-chartjs-2 for the metrics visualizations</li>
            <li>Custom CSS for the coffee-inspired theme and layout</li>
          </ul>
          <p>
            The project also follows a GitHub workflow with branches, pull
            requests, and code review, just like a real-world team project.
          </p>
        </article>

        {/* about me section */}
        <article className="about-card">
          <h2>About Me</h2>
          <p>
            Hi there, I’m Natalya, a Computer Science student who is learning
            how to build practical, data-driven tools that also feel
            aesthetically pleasing. I wanted this project to blend technical
            skills with something that genuinely makes me happy, exploring
            coffee shops in Portland, Oregon.
          </p>
          <p>
            My favorite coffee order is a cappuccino, just enough espresso flava
            with a smooth, cozy feel. That coffee vibe is what I tried to bring
            into this dashboards design and color palette.
          </p>

          <div className="about-links">
            <h3>Find me online</h3>
            <ul>
              <li>
                <a
                  href="https://github.com/natalyalangford"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub – @natalyalangford
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/natalya-langford-9749bb121/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
