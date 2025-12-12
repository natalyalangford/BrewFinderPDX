import React from "react";
import { Link } from "react-router-dom";
import "../styles/app.css";
import "../styles/home.css";

// feature card images
import cafesImg from "../assets/home-cafes.jpg";
import beansImg from "../assets/home-beans.jpg";
import metricsImg from "../assets/home-metrics.jpg";

export default function Home() {
  return (
    // wrapper for entire page
    <section className="page home">
      {/* main heading */}
      <header className="home-header">
        <h1 className="page-title">Portland Cafe Dashboard</h1>
        <p className="page-intro">
          BrewFinderPDX helps you explore coffee shops around Portland, discover
          coffee beans, and see high-level trends across the city.
        </p>
      </header>

      {/* feature cards, each card links to a different page */}
      <section className="feature-grid" aria-label="Main dashboard sections">
        {/* coffee shop card */}
        <article className="feature-card">
          <Link to="/cafes" className="feature-card-link">
            <h2 className="feature-title">Explore Cafes</h2>
            {/*card image*/}
            <img
              src={cafesImg}
              alt="Illustration of a cozy coffee shop storefront"
              className="feature-image"
            />
            <p className="feature-text">
              Browse coffee shops across Portland, see ratings, price level, and
              whether they&apos;re open right now.
            </p>
            <span className="feature-card-cta">
              Go to Coffee Shop Directory →
            </span>
          </Link>
        </article>

        {/* metrics card */}
        <article className="feature-card">
          <Link to="/metrics" className="feature-card-link">
            <h2 className="feature-title">City Metrics</h2>
            {/*card image*/}
            <img
              src={metricsImg}
              alt="White coffee cup with beans on a saucer"
              className="feature-image"
            />
            <p className="feature-text">
              Visualize ratings, price trends, and neighborhood cafe density
              with interactive charts.
            </p>
            <span className="feature-card-cta">View Metrics →</span>
          </Link>
        </article>

        {/* about card */}
        <article className="feature-card">
          <Link to="/about" className="feature-card-link">
            <h2 className="feature-title">About</h2>
            {/* card image*/}
            <img
              src={beansImg}
              alt="Coffee beans arranged in a speech bubble"
              className="feature-image"
            />
            <p className="feature-text">About this project.</p>
            <span className="feature-card-cta">Learn More →</span>
          </Link>
        </article>
      </section>
    </section>
  );
}
