import React, { useState } from "react";

export default function Beans() {
  const [search, setSearch] = useState("");

  return (
    <section className="page">
      <h1 className="page-title">Coffee Bean Explorer</h1>
      <p>
        Search specialty coffee beans by roaster, origin, or bean name using the
        Third Wave Coffee Base API.
      </p>

      <form
        className="bean-search"
        onSubmit={(event) => event.preventDefault()}
      >
        <label>
          Search beans:
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="e.g. Ethiopia, Sightglass, Banner Dark"
          />
        </label>
      </form>

      <p>Bean search results will appear here once the API is connected.</p>
    </section>
  );
}
