import React, { useEffect, useState } from "react";

// rough center for pdx
const PORTLAND_CENTER = { lat: 45.5152, lng: -122.6784 };

export default function CafeList() {
  const [cafes, setCafes] = useState([]); // list of cafes from places api
  const [searchText, setSearchText] = useState(""); // controlled input for search
  const [loading, setLoading] = useState(false); // loading n error state
  const [error, setError] = useState("");

  // helper that calls places api
  function fetchCafes(query) {
    // make sure libary is loaded
    if (!window.google || !window.google.maps || !window.google.maps.places) {
      setError("Google Places library is not loaded.");
      return;
    }

    setLoading(true);
    setError("");

    // needs a DOM mode, use dummy div
    const service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );

    const request = {
      // center search aroudn downtown pdx
      location: new window.google.maps.LatLng(
        PORTLAND_CENTER.lat,
        PORTLAND_CENTER.lng
      ),
      radius: 5000, // initally set to 5km around downtown pdx
      type: "cafe",
      query: query || "coffee shop portland or", // if false, fall back
    };

    service.textSearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        // normalize so easier to render
        const mapped = results.map((place) => ({
          id: place.place_id,
          name: place.name,
          address:
            place.formatted_address || place.vicinity || "Address unavailable",
          rating: place.rating,
          userRatingsTotal: place.user_ratings_total,
          priceLevel: place.price_level,
          // if opening hours is missing, use null
          openNow: place.opening_hours?.open_now ?? null,
        }));
        setCafes(mapped);
      } else {
        // if api returns error, show user
        setError("Could not load cafés. Status: " + status);
        setCafes([]);
      }
      setLoading(false);
    });
  }

  // initial load grab some coffeeshops in pdx
  useEffect(() => {
    fetchCafes();
  }, []); // empty dep array means only on mount

  // handle form submit
  function handleSubmit(event) {
    event.preventDefault();
    // if search box is empt load default portland coffee shops
    if (!searchText.trim()) {
      fetchCafes();
    } else {
      // search for “{searchText}" coffee shop portland, allow user to type name or neighborhood
      fetchCafes(`${searchText.trim()} coffee shop portland or`);
    }
  }

  return (
    // main wrapper for page
    <section className="page cafes-page">
      {/* page header with search form */}
      <header className="cafes-header">
        <h1 className="page-title">Coffee Shops in Portland</h1>
        {/* short explanation */}
        <p className="page-subtitle">
          Explore Portland’s coffee scene using live data from the Google Places
          API. Search by name or neighborhood to explore local coffee shops and
          find your next favorite spot.
        </p>

        {/* search form, on sub,it triggeres new places api request */}
        <form className="cafe-search" onSubmit={handleSubmit}>
          {/* sr-only label for accessibility, visible to screen readers */}
          <label htmlFor="cafe-search" className="sr-only">
            Search for a coffee shop or neighborhood
          </label>

          {/* controlled input field */}
          <input
            id="cafe-search"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search by coffee shop or neighborhood (e.g., 'Starbucks', or '23rd St'"
            className="cafe-search-input"
          />

          {/* submit button */}
          <button type="submit" className="cafe-search-button">
            Search
          </button>
        </form>
      </header>

      {/* status messages: loading, error, no results */}
      {/* loading indicator*/}
      {loading && (
        <p className="cafes-status cafes-status-loading">
          Loading coffee shops…
        </p>
      )}
      {/* error message if request fails */}
      {error && <p className="cafes-status cafes-status-error">{error}</p>}

      {/* cafe reuslt list */}
      {/* only show if not loading or error */}
      {!loading && !error && (
        <div className="cafe-list">
          {/* if no cafes, show no results message */}
          {cafes.length === 0 ? (
            <p className="cafes-status">
              No results. Try again with a different name or neighborhood!
            </p>
          ) : (
            // else map cafe and show cards
            cafes.map((shop) => (
              <article key={shop.id} className="cafe-card">
                <h2 className="cafe-name">{shop.name}</h2>
                {/* address from places api*/}
                <p className="cafe-address">{shop.address}</p>
                {/*cafe meta data row: rating, price level, open now */}
                <div className="cafe-meta-row">
                  {/* rating with review count */}
                  <span className="cafe-rating">
                    {shop.rating ?? "N/A"}
                    {shop.userRatingsTotal
                      ? ` (${shop.userRatingsTotal} reviews)`
                      : ""}
                  </span>

                  {/* price level: show $ repeated priceLevel times */}
                  <span className="cafe-price">
                    {shop.priceLevel
                      ? "$".repeat(shop.priceLevel)
                      : "Price n/a"}
                  </span>

                  {/* open now status with color coding */}
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
