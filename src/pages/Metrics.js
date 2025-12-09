//  donut chart of cafe review share by neighborhood
import React, { useEffect, useState } from "react";
import "../styles/app.css";
import "../styles/home.css";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

// portland neighborhoods
const NEIGHBORHOODS = {
  downtown: {
    label: "Downtown / PSU",
    center: { lat: 45.5152, lng: -122.6784 },
  },
  pearl: {
    label: "Pearl District",
    center: { lat: 45.5284, lng: -122.6845 },
  },
  division: {
    label: "SE Division / Clinton",
    center: { lat: 45.5047, lng: -122.6272 },
  },
  alberta: {
    label: "NE Alberta Arts",
    center: { lat: 45.5581, lng: -122.6483 },
  },
};

// call google places for given neighborhood
function fetchCafesForCenter(center) {
  return new Promise((resolve, reject) => {
    if (!window.google || !window.google.maps || !window.google.maps.places) {
      reject(new Error("Google Places library is not loaded."));
      return;
    }

    const service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );

    const request = {
      location: new window.google.maps.LatLng(center.lat, center.lng),
      radius: 4000, // meters
      type: "cafe",
      query: "coffee shop portland or",
    };

    service.textSearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        const mapped = results.map((place) => ({
          id: place.place_id,
          name: place.name,
          // number of reviews drives donut size
          reviews: place.user_ratings_total ?? 0,
        }));
        resolve(mapped);
      } else {
        reject(new Error("Could not load cafés. Status: " + status));
      }
    });
  });
}

export default function Metrics() {
  const [cafes, setCafes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeHood, setActiveHood] = useState("downtown");

  useEffect(() => {
    loadData("downtown");
  }, []);

  function loadData(neighborhoodKey = activeHood) {
    const hood = NEIGHBORHOODS[neighborhoodKey];
    if (!hood) return;

    setLoading(true);
    setError("");

    fetchCafesForCenter(hood.center)
      .then((data) => {
        setCafes(data);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }

  const hoodLabel = NEIGHBORHOODS[activeHood]?.label ?? "";

  // build data for donut chart

  // only keep ones that have reviews
  const cafesWithReviews = cafes
    .filter((c) => typeof c.reviews === "number" && c.reviews > 0)
    // sort by reviews descending, most popular first
    .sort((a, b) => b.reviews - a.reviews);

  const labels = cafesWithReviews.map((c) => c.name);
  const values = cafesWithReviews.map((c) => c.reviews);
  const totalReviews = values.reduce((sum, v) => sum + v, 0);

  // large rainbow palette for chart slices
  const rainbowColors = [
    "#ff6384",
    "#36a2eb",
    "#ffce56",
    "#4bc0c0",
    "#9966ff",
    "#ff9f40",
    "#d72638",
    "#3c91e6",
    "#ffdd00",
    "#6be585",
    "#845ec2",
    "#ffc75f",
    "#f9f871",
    "#0081cf",
    "#c34a36",
    "#008f7a",
    "#00c9a7",
    "#845c40",
    "#c492b1",
    "#b0deff",
    "#ff6f91",
    "#ff9671",
    "#ffc75f",
    "#f9f871",
    "#0089ba",
    "#2ec4b6",
    "#ffbf69",
    "#e71d36",
    "#011627",
    "#73fbd3",
  ];

  // cycle colors if there are more cafes than colors
  const sliceColors = labels.map(
    (_, idx) => rainbowColors[idx % rainbowColors.length]
  );

  const donutData = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: sliceColors,
        borderColor: "#fff7ed",
        borderWidth: 2,
      },
    ],
  };

  const donutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "60%",
    plugins: {
      legend: {
        display: false, // use own legend below
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const name = context.label;
            const reviews = context.raw;
            const percent =
              totalReviews > 0
                ? ((reviews / totalReviews) * 100).toFixed(1)
                : 0;
            return `${name}: ${reviews} reviews (${percent}%)`;
          },
        },
      },
      title: {
        display: true,
        text: `Share of reviews by coffee shop — ${hoodLabel}`,
        font: { size: 16 },
      },
    },
  };

  return (
    <section className="page">
      <header className="page-header">
        <h1 className="page-title">Cafe Stats</h1>
        <p className="page-intro">
          The following visualization shows how review activity is distributed
          across coffee shops in a selected Portland neighborhoods. By comparing
          each coffee shops “share” of total reviews, it can be quickly identify
          which spots are the most popular, most visited, or most talked about
          within the choosen area. Higher review counts often indicate high foot
          traffic, stronger customer engagement, and local favorites that could
          be worth checking out!
        </p>

        {/* neighborhood selector buttons */}
        <div className="metrics-hood-row">
          <span className="metrics-hood-label">Neighborhood view:</span>
          <div className="metrics-hood-buttons">
            {Object.entries(NEIGHBORHOODS).map(([key, info]) => (
              <button
                key={key}
                type="button"
                className={
                  "hood-button" +
                  (key === activeHood ? " hood-button--active" : "")
                }
                onClick={() => {
                  setActiveHood(key);
                  loadData(key);
                }}
              >
                {info.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {loading && <p>Loading coffee shop data…</p>}
      {error && <p className="error-text">{error}</p>}

      {!loading && !error && cafesWithReviews.length > 0 && (
        <section
          className="metrics-chart-wrapper"
          aria-label="Cafe review donut chart"
        >
          <div className="metrics-chart">
            <Doughnut data={donutData} options={donutOptions} />
          </div>

          {/* own legend: color dot + shop name + review count */}
          <div className="metrics-legend">
            <h2 className="metrics-legend-title">
              Coffee Shops in this neighborhood
            </h2>
            <ul className="metrics-legend-list">
              {cafesWithReviews.map((cafe, idx) => (
                <li key={cafe.id} className="metrics-legend-item">
                  <span
                    className="metrics-color-dot"
                    style={{ backgroundColor: sliceColors[idx] }}
                  />
                  <span className="metrics-legend-name">{cafe.name}</span>
                  <span className="metrics-legend-reviews">
                    {cafe.reviews.toLocaleString()} reviews
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {!loading && !error && cafesWithReviews.length === 0 && (
        <p>No coffeeshops with reviews found for this neighborhood!</p>
      )}
    </section>
  );
}
