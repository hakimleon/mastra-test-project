# Project: La Compagnie Restaurant Website

This is a Next.js project for a restaurant landing page called "La Compagnie".

## Project Overview

The project is a single-page website for a restaurant, featuring a hero section, menu, about us, and contact information. It's built with Next.js and utilizes a modern tech stack for a visually appealing and interactive user experience.

### Technologies Used

*   **Framework:** Next.js
*   **Styling:** Tailwind CSS with Radix UI components
*   **AI Integration:** The project includes dependencies for AI-related tasks using `@ai-sdk/react` and `@mastra/ai-sdk`, although their specific usage is not immediately apparent from the landing page.
*   **Deployment:** The project is set up for easy deployment on Vercel.

### Architecture

The project follows a standard Next.js `app` directory structure.

*   `src/app/layout.tsx`: The root layout, which includes the basic HTML structure, fonts, and a dark theme.
*   `src/app/page.tsx`: The main landing page, which contains all the content for the restaurant website.
*   `public/`: Contains static assets like images.
*   `components/`: Contains reusable React components.

## Building and Running

To run the project in a development environment, use one of the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

This will start the development server at `http://localhost:3000`.

To create a production build, use the following command:

```bash
npm run build
```

To start the production server, use the following command:

```bash
npm run start
```

## Development Conventions

### Linting

The project uses ESLint for code linting. To run the linter, use the following command:

```bash
npm run lint
```

### Styling

The project uses Tailwind CSS for styling. It's recommended to use utility classes for styling and to create new components for any new UI elements.

### AI Integration

The project includes dependencies for AI-related tasks. Any new AI-related features should be implemented using the existing `@ai-sdk/react` and `@mastra/ai-sdk` libraries.
