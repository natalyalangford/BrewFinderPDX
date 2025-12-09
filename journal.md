Journal Entry: Session # 1
Project: BrewFinderPDX

A dashboard web application that visualizes Portland café data (locations, ratings, pricing, neighborhoods, etc.).

Session Summary — Initial Setup & Foundation

1. Creating the Repository and Local Project

   - Created GitHub repo: BrewFinderPDX
   - Cloned it locally using git clone
   - Attempted npx create-react-app BrewFinderPDX but received an error because npm project names cannot contain capital letters
   - Fixed this by running npx create-react-app . inside the repo folder (lowercase project name)
   - CRA installed successfully and ran on localhost:3000

   Issues & Fixes: - Capital letter restriction: solved by creating the project “in place” without a name

2. Installing React Router and Preparing Routing Structure

   - Installed React Router: npm install react-router-dom
   - Updated index.js to wrap the app with BrowserRouter.
   - Replaced CRA boilerplate in App.js with placeholders for future pages: Home, Cafes, Metrics, About

3. Creating the Project Folder Structure

   - Created a professional folder layout inside src/:
     components/ - reusable UI pieces (NavBar, cards, charts)
     pages/ - route level views
     services/ - API calls
     hooks/ - custom logic hooks
     styles/ - CSS
     assets/ - images, icons, fonts

4. Building the Navigation Bar + Routing Setup

   - Created a NavBar component inside /components
   - Used NavLink for active link styling
   - Added pages in /pages with simple placeholder content
   - Verified that routing works and each page loads correctly
   - Added custom CSS files for navbar layout and color theme

5. Adding Initial Styling and Accessibility
   - Created CSS modules for layout styling:
     styles/app.css
     styles/nav.css
   - Added accessibility improvements:
     aria-label="Primary" on the <nav> element
   - Better color contrast
   - Hover and focus states

Technologies used this session: - React: component rendering and state management - React Router: multi-page routing system - Custom CSS: styling and layout consistency

How These Technologies Work Together: - CRA handles the base React setup, webpack, and development server - React Router organizes the project into separate pages - NavBar + routing system forms the backbone of the dashboard - CSS modules define a consistent design across webapp

Outside Sources Used:

- React documentation — https://react.dev
- React Router documentation — https://reactrouter.com
- Create React App docs — https://create-react-app.dev
- CSS Flexbox guide — https://css-tricks.com/snippets/css/a-guide-to-flexbox

Journal Entry: Session # 2

Implemented the accessibility feedback I received from a classmate. Adding the axe-core accessibility checker to the React project so I can automatically detect accessibility issues during development. Specifically, I added the recommended setup from the lecture slides to src/index.js, using a conditional import so it only runs in development mode. This ensures axe core is not bundled into production builds.

Technologies involved:

- React 18
- react-router-dom
- @axe-core/react
- Node / npm (package management)
- Browser DevTools Console for verification

In src/index.js I added:
if (process.env.NODE_ENV !== "production") {
import("@axe-core/react").then(({ default: axe }) => {
axe(React, ReactDOM, 1000);
console.log("react accessibility checker initialized");
});
}
This matches the approach recommended in class for React project

Issues encountered:

- Originally considered using the vite example but that code did not match Create-React-App structure
- Confirmed in class notes and through experimentation that process.env.NODE_ENV is correct for CRA

External resources referenced:

- lecture slides CS463 Chapter 12 Testing Frameworks
- React environment variable docs
- NPM documentation for @axe-core/react

Next steps:

- Commit and push this change on its own branch
- Continue building core dashboard pages (Home, Coffe Shops, Metrics)

Journal Entry: Session # 3

Focused on improving the user interface and dashboard feel. Main goal was to make the home page visually appealing and introduce the three major feature areas of the application

Task List:

- Found new transparent coffee themed images and stored them in src/assets/
- Added three feature cards to the Home page (coffee shops, beans, metrics), each with a title, description, and image
- Styled the cards using CSS (feature-card, feature-grid, feature-image) to achieve consistent sizing, spacing, and visual balance
- Switched the site typography to a cozy coffee shop vibe using the google fonts pacifico and playfair display
- Updated the navigation bar background color to a dark brown with beige text for consistency with the theme
- Adjusted Home page background to a warm beige color and ensured card backgrounds matched

Reflection / next steps:

- The Home page now looks much closer to a real dashboard landing experience. Images are still a little large in some cases, but they look clean against the beige background

Next session goals:

- Make each feature card clickable
- Add hover animations and transitions
- Finish chart components on the Metrics page
- Possibly include small at a glance/quixk summary KPIs on the Home page (avg rating, number of coffee shops)

External resources referenced:

- Google Maps JavaScript API & Places API: Used for searching and retrieving café data, including names, addresses, ratings, price levels, and open status. https://developers.google.com/maps/documentation/javascript/places
- Google fonts: Imported and used to style headings and branding (“Pacifico” and “Playfair Display”).https://fonts.googlecom/
- UI images: Pinterest (transparent coffee shop icon)

Journal Entry: Session # 4

Accomplishments:

- Completely redesigned the Metrics page UX
- Switched from mixed chart types to a single donut visualization for clarity and consistency
- Implemented neighborhood filter buttons (Downtown/PSU, Pearl District, SE Division/Clinton, NE Alberta Arts) to dynamically change the visualization based on area
- Integrated live Google Places API data to: - Fetch coffee shops based on different locations - Aggregate Google review counts per cafe - Sort cafes by total reviews, descending
- Created a rainbow color palette that clearly differentiates donut slices
- Matching legend list that shows:
  - Coffee shop name
  - Corresponding color
  - Review count

Technical details:

- Used react-chartjs-2 + Chart.js
- Generated a dynamic 20+ color array for maximum readability
- Created a reusable function to:
  - Fetch data based on geolocation parameters
  - Map Places results to { name, review_count }
  - Compute donut labels and datasets.data

Challenges:

- Original color scheme resulted in indistinguishable slices, solved via custom random/curated color generation
- Google Places API returns variable neighborhoods, implementing button presets helps control data quality

External resources used:

- Color palettes: Tailwind UI color spectrum for chart palettes
- Chart.js documentation: https://www.chartjs.org/docs/latest/
- Google Places API textSearch reference

Journal Session # 5

Accomplishments:

- Focused on refinisng the Coffee Shop metrics/chart page, improving accesibility, polishing UI and cleaning up small UX issues across the dashboard.
- Major improvements to the metrics/coffe shop stats page
  - Rewrote the page logic and layout to use a single meaningful visualization
  - Reworite the introductory paragraphs for each feature page to be more meaingful and data driven. Eg. clarifed why the donut chart matters and what insights users can gt from it
- Accessibility fixes using WAVE:
  - Missing form label
  - ARIA attributs
  - Color contrast issues with buttons
- Removed Bean page/feature, could not end up finding a good API for coffee beans. Updated page navigation with safely linking the about page instead of Bean on the home page.
  - Cleaned up unnused imports, routes and components related to the coffee beans feature
- About page: Added an about page that goes into further detail about the project and myself
  - The purpose of BrewFinderPDX
  - Technologies used
  - Short personal note about my intered in portland and coffee
  - Added links to personal github and linkedin
- Codebase cleanup & linkting
  - Removed unused components
  - Ensure all pages run without console errors
  - WAVE test

Reflection:

This session brought the project all together visually, technicallys and structually. The Cofee shop metrics page delivers meaningful insight using live data and the rest of the dashboard is polished and cohesive.

External Resourses Used:

- Google Places API reference https://developers.google.com/maps/documentation/javascript/places
- Chart.js documentation https://www.chartjs.org/docs/latest/
- WAVE accessibility tool https://wave.webaim.org/
- ARIA guidelines
