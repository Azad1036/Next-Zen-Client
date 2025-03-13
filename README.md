# Next Zen - Crowdfunding Platform (Frontend)

Welcome to **Next Zen**, a fully responsive crowdfunding platform built with React and Tailwind CSS. This single-page application (SPA) enables users to raise funds for personal needs, creative ideas, or startups while providing an intuitive and visually appealing user experience. This README details the frontend implementation as per the assignment requirements.

**[Live Site URL](https://next-zen.web.app/)**

## Project Description

Next Zen is designed to meet the Tulip Assignment Category requirements, focusing on a unique frontend design with responsive layouts, dynamic routing, and interactive features. The platform avoids Lorem Ipsum text and default alerts, ensuring a polished and custom user experience.

## Frontend Features

- **Responsive Design**: Adapts seamlessly to mobile, tablet, and desktop views using Tailwind CSS, ensuring usability across all devices (e.g., optimized "See More" buttons for mobile).
- **Dynamic Navigation**: Implements `react-router-dom` for smooth SPA navigation with routes like `/`, `/allCampaign`, `/addCampaign`, `/myCampaign`, and `/myDonations`.
- **Theming**: Supports light/dark themes (e.g., "synthwave") with smooth transitions via Context API and Tailwind CSS.
- **Interactive Components**: Includes hover effects, a responsive table for campaigns, and a slider on the home page for an engaging UI.
- **Authentication UI**: Conditionally renders "Login" and "Register" buttons or user profile and "Logout" based on authentication status, with hover effects showing user details.

## Frontend Technologies

- **React**: For component-based architecture and state management.
- **Tailwind CSS**: For utility-first styling and responsiveness.
- **React Router DOM**: For client-side routing.
- **Context API**: For managing global states like theme preferences.

## Project Structure

### Pages and Routes
1. **Home Page (`/`)**: - **Navbar**: Contains logo, Home, All Campaign, Add New Campaign (private), My Campaign (private), My Donations (private), Login/Register (conditional), and user profile/logout. - **Banner/Slider**: A carousel with at least 3 slides displaying meaningful content. - **Running Campaigns**: Shows 6 active campaign cards with "See More" buttons linking to details. - **Extra Sections**: Two meaningful sections (e.g., testimonials, stats). - **Footer**: Responsive footer with site info, quick links, and contact details.
2. **All Campaigns (`/allCampaign`)**: - Displays all campaigns in a responsive table with columns for Number, Campaign Title, Campaign Type, Date, and a "See More" button linking to `/campaign/:id`.
3. **Add New Campaign (`/addCampaign`)**: - Private route with a form including fields: image URL, title, type (dropdown), description, minimum donation amount, deadline, and read-only user email/name.
4. **My Campaigns (`/myCampaign`)**: - Private route showing user-specific campaigns in a table with 3-4 details per row, plus "Update" and "Delete" buttons.
5. **My Donations (`/myDonations`)**: - Private route displaying user donations in card format.
6. **Campaign Details (`/campaign/:id`)**: - Private route showing full campaign details with a "Donate" button.
7. **Login Page**: - Form with email, password, Google/GitHub login option, and a link to Register.
8. **Register Page**: - Form with name, email, photoURL, password (with validation: uppercase, lowercase, min 6 chars), and a link to Login.
9. **404 Page**: - Custom "Not Found" page without navbar/footer.

### Additional Features
- **Loading Spinner**: Displays during data loading states.
- **Theme Toggle**: Light/dark mode switch on the home page.
- **Sort Functionality**: Button on All Campaigns page to sort by minimum donation amount.

## Setup Instructions

1. **Clone the Repository**: ```bash git clone <your-client-side-repo-url> cd next-zen ```
2. **Install Dependencies**: ```bash npm install ```
3. **Set Environment Variables**: - Create a `.env` file in the root directory and add Firebase config keys (e.g., `REACT_APP_FIREBASE_API_KEY`).
4. **Run Locally**: ```bash npm start ``` - Opens at `http://localhost:3000`.
5. **Build for Production**: ```bash npm run build ```
6. **Deploy**: - Deploy to Netlify, Surge, or Firebase (e.g., `netlify deploy --prod`).

## GitHub Commits
- Minimum of 15 notable commits on the client-side repository, covering component creation, styling, routing, and responsiveness.

## Assignment Compliance
- **Unique Design**: Distinct from previous projects or module examples.
- **No Lorem Ipsum**: All text is meaningful.
- **No Default Alerts**: Custom toast/sweet alerts for success/error messages.
- **Error-Free Reloading**: No errors on route reloads with proper routing setup.
- **Private Routes**: Redirects to login if not authenticated.

## Challenges Implemented
- Dark/light theme toggle on the home page.
- Responsive table with sort functionality on `/allCampaign`.

## Submission Details
- **[Client-Side Repositor](https://github.com/Azad1036/Next-Zen-Client)**
- **[Live Site URL](https://next-zen.web.app/)**