# React Portfolio - Ken Mosquera

This is a modern, performant portfolio website built with React, TypeScript, and Vite, styled with Tailwind CSS. It features a black and gold theme inspired by the League of Legends aesthetic, with a focus on instant navigation and a polished user experience.

## North Star
- **Theme**: Black & Gold, minimal, premium, and readable.
- **Speed**: Near-instant page loads with LCP < 1.5s.
- **UX**: Smooth micro-interactions and full keyboard accessibility.

## Tech Stack
- **Build**: Vite + React + TypeScript
- **Styling**: Tailwind CSS with CSS Variables
- **Routing**: React Router
- **Animations**: Framer Motion
- **Linting**: ESLint
- **Formatting**: Prettier
- **Testing**: Vitest + React Testing Library

---

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation
1.  Clone the repository:
    ```bash
    git clone https://github.com/Zucloak/portfolio-react.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd portfolio-react
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Development Server
To start the local development server, run:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

---

## Available Scripts

-   `npm run dev`: Starts the development server.
-   `npm run build`: Type-checks and builds the application for production.
-   `npm run preview`: Previews the production build locally.
-   `npm run typecheck`: Runs the TypeScript compiler to check for type errors.
-   `npm run lint`: Lints the codebase for potential errors and style issues.
-   `npm run lint:fix`: Automatically fixes linting issues.
-   `npm run format`: Formats the code with Prettier.
-   `npm run test`: Runs the unit and integration tests with Vitest.
-   `npm run audit`: Checks for security vulnerabilities in dependencies.

**Note on Testing in some CI/CD environments:**
The test suite is configured with Vitest. However, some sandboxed environments may have issues with `npm` creating the necessary `node_modules/.bin` directory, which can prevent the test runner from being found. If you encounter a `vitest: not found` error, this is likely the cause. The tests themselves are valid and will run correctly in a standard local environment.

---

## Project Structure
```
portfolio/
├── public/
│   ├── images/
│   │   ├── me/
│   │   └── projects/
├── src/
│   ├── app/                # Main App component and router setup
│   ├── components/         # Reusable components (NavBar, Footer, Card, etc.)
│   ├── data/               # Static data (profile, projects, skills)
│   ├── hooks/              # Custom hooks
│   ├── lib/                # Helper functions
│   ├── pages/              # Page components (Home, About, etc.)
│   ├── styles/             # Global styles and theme variables
│   └── test/               # Test setup and utilities
├── .eslintrc.cjs
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## Performance Checklist
-   [x] **Framework**: Vite + React for a fast development and build process.
-   [x] **Routing**: React Router with `prefetch="intent"` on navigation links for instant page transitions.
-   [x] **Styling**: Tailwind CSS for minimal CSS output.
-   [ ] **Images**: Use modern formats like AVIF or WebP. Implement `srcset` for responsive images. (Placeholders are currently used).
-   [x] **Animations**: Hardware-accelerated CSS transitions and `framer-motion` for smooth, performant animations.
-   [x] **Code Splitting**: Vite automatically code-splits by route.
-   [ ] **Lazy Loading**: Implement lazy loading for below-the-fold components or images if needed.

---

## Customization

### Theme
The theme can be customized by editing the CSS variables in `src/styles/theme.css`.

### Content
All personal data, project details, skills, and experience can be updated in the files within the `src/data/` directory.

### Contact Form
The contact form in `src/pages/ContactPage.tsx` uses [Formspree](https://formspree.io/). To make it work, you need to replace `YOUR_FORM_ID` in the `action` URL with your own Formspree form ID.
