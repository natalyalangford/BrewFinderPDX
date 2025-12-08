import React from "react";
import { Link } from "react-router-dom";

import "../styles/app.css";
import "../styles/home.css";
import cafesImg from "../assets/home-cafes.jpg";
import beansImg from "../assets/home-beans.jpg";
import metricsImg from "../assets/home-metrics.jpg";

export default function Home() {
  return (
    <section className="page home">
      {/* main heading */}
      <header className="home-header">
        <h1 className="page-title">Portland Cafe Dashboard</h1>
        <p className="page-intro">
          BrewFinderPDX helps you explore coffee shops around Portland, discover
          coffee beans, and see high-level trends across the city.
        </p>
      </header>

      {/* feature cards */}
      <section className="feature-grid" aria-label="Main dashboard sections">
        {/* cafes card */}
        <article className="feature-card">
          <h2 className="feature-title">Explore Cafes</h2>
          <img
            src={cafesImg}
            alt="Cozy Portland coffee shop interior"
            className="feature-image"
          />
          <p className="feature-text">
            Browse coffee shops across Portland, see ratings, price level, and
            whether they&apos;re open right now.
          </p>
          <Link to="/cafes" className="feature-button">
            Go to Cafes
          </Link>
        </article>

        {/* beans card */}
        <article className="feature-card">
          <h2 className="feature-title">Coffee Beans</h2>
          <img
            src={beansImg}
            alt="Coffee beans in a burlap sack"
            className="feature-image"
          />
          <p className="feature-text">
            (Coming soon) Search beans by roast, origin, and flavor profile to
            build your perfect brew.
          </p>
          <Link to="/beans" className="feature-button feature-button-ghost">
            Beans Explorer
          </Link>
        </article>

        {/* metrics card */}
        <article className="feature-card">
          <h2 className="feature-title">City Metrics</h2>
          <img
            src={metricsImg}
            alt="Coffee cup next to charts and a laptop"
            className="feature-image"
          />
          <p className="feature-text">
            (Coming soon) Visualize ratings, price trends, and neighborhood cafe
            density with interactive charts.
          </p>
          <Link to="/metrics" className="feature-button feature-button-ghost">
            View Metrics
          </Link>
        </article>
      </section>
    </section>
  );
}
