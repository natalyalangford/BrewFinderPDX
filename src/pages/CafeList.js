import React, { useEffect, useState } from "react";

const PORTLAND_CENTER = { lat: 45.5152, lng: -122.6784 };

export default function CafeList() {
  const [cafes, setCafes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // helper that calls places API
  function fetchCafes(query) {
    if (!window.google || !window.google.maps || !window.google.maps.places) {
      setError("Google Places library is not loaded.");
      return;
    }

    setLoading(true);
    setError("");

    const service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );

    const request = {
      location: new window.google.maps.LatLng(
        PORTLAND_CENTER.lat,
        PORTLAND_CENTER.lng
      ),
      radius: 5000, // initally set to 5km around downtown pdx
      type: "cafe",
      query: query || "coffee shop portland or",
    };

    service.textSearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        const mapped = results.map((place) => ({
          id: place.place_id,
          name: place.name,
          address:
            place.formatted_address || place.vicinity || "Address unavailable",
          rating: place.rating,
          userRatingsTotal: place.user_ratings_total,
          priceLevel: place.price_level,
          openNow: place.opening_hours?.open_now ?? null,
        }));
        setCafes(mapped);
      } else {
        setError("Could not load cafés. Status: " + status);
        setCafes([]);
      }
      setLoading(false);
    });
  }

  // initial load: grab some coffeeshops in Portland
  useEffect(() => {
    fetchCafes();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    // if search box is empty, just load default portland coffee shops again
    if (!searchText.trim()) {
      fetchCafes();
    } else {
      // search for “{searchText} coffee shop portland”
      fetchCafes(`${searchText.trim()} coffee shop portland or`);
    }
  }

  return (
    <section className="page cafes-page">
      <header className="cafes-header">
        <h1 className="page-title">Coffee Shops in Portland</h1>
        <p className="page-subtitle">
          This page uses the Google Places API to search for coffee shops around
          Portland. Filter by name or neighborhood to discover new spots.
        </p>

        <form className="cafe-search" onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search by coffee shop or neighborhood"
            className="cafe-search-input"
          />
          <button type="submit" className="cafe-search-button">
            Search
          </button>
        </form>
      </header>

      {loading && (
        <p className="cafes-status cafes-status-loading">
          Loading coffee shops…
        </p>
      )}
      {error && <p className="cafes-status cafes-status-error">{error}</p>}

      {!loading && !error && (
        <div className="cafe-list">
          {cafes.length === 0 ? (
            <p className="cafes-status">
              No results. Try again with a different name or neighborhood!
            </p>
          ) : (
            cafes.map((shop) => (
              <article key={shop.id} className="cafe-card">
                <h2 className="cafe-name">{shop.name}</h2>
                <p className="cafe-address">{shop.address}</p>

                <div className="cafe-meta-row">
                  <span className="cafe-rating">
                    ⭐ {shop.rating ?? "N/A"}
                    {shop.userRatingsTotal
                      ? ` (${shop.userRatingsTotal} reviews)`
                      : ""}
                  </span>

                  <span className="cafe-price">
                    {shop.priceLevel
                      ? "$".repeat(shop.priceLevel)
                      : "Price n/a"}
                  </span>

                  <span
                    className={
                      "cafe-open " +
                      (shop.openNow === null
                        ? "unknown"
                        : shop.openNow
                        ? "open"
                        : "closed")
                    }
                  >
                    {shop.openNow === null
                      ? "Hours n/a"
                      : shop.openNow
                      ? "Open now"
                      : "Closed"}
                  </span>
                </div>
              </article>
            ))
          )}
        </div>
      )}
    </section>
  );
}
