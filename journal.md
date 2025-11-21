Journal Entry: Session # 1 Nov 17 - Nov 21, 2025
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
