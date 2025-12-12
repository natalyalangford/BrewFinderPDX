## A Portland Coffee Shop Data Dashboard

BrewFinderPDX is a front-end React dashboard that helps users explore cafés and coffee shops around Portland, Oregon. The project uses public APIs to display location data, pricing insights, ratings, and trends through interactive charts and visualizations.

This project was built as the final assignment for CS464

---

## Features

Home Dashboard:

- Landing page introducing the major features of the application
- Coffee/cozy themed UI with a warm color palette and custom typography
- Feature cards for navigation to directory, metrics, and about pages

Coffee Shop Directory:

- Search by shop name or neighborhood
- Uses Google Places API to retrieve:
  - Name, address
  - Rating and review count
  - Price level
  - Open/closed status
- Responsive card layout for clear browsing

Metrics Page:

- Donut chart visualization displaying each coffee shops percentage of total reviews in a selected neighborhood
- Portland neighborhood selector buttons including popular spots such as Downtown/PSU, Pearl District, SE Division, and NE Alberta Arts
- Color coded legend showing each shop and its corresponding reviews share
- Explains why review distribution is a meaningful metric

About Page:

- Project purpose and overview
- Technologies used
- Personal overview and links to GitHub/LinkedIn

---

## Tech Stack

Frontend Framework:

- React 18
- React Router

APIs:

- Google Places API (Text Search)
- API key loaded via script tag in index.html

Visualization:

- Chart.js
- react-chartjs-2

Styling:

- Custom CSS
- Google Fonts: Pacifico, Playfair Display
- Coffee & cozy inspired design system

Accessibility:

- @axe-core/react
- WAVE Web Accessibility Checker

---

Install dependencies:

- npm install

Start the dev server:

- npm start

The app runs at: http://localhost:3000
