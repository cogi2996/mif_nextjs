# MIF Nextjs

## 1. Introduction

This is a web application built with [Next.js](https://nextjs.org/), a React framework that supports server-side rendering and static site generation.

**Movie Insight Forum (MIF)**  is a forum for film enthusiasts. The application allowing users to join groups, post articles, engage with film content, and message within groups. It provides detailed information about movies and actors, along with features for rating and saving films, as well as favoriting artists.

### 1.1. Technology used:

- **Next.js**: Supports server-side rendering (SSR) and static site generation (SSG).
- **React Hook Form**: Efficient form handling with React.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Axios**: For making HTTP requests with custom instances.
- **React Query**: Server-side state management, caching, and API interactions.
- **Zod**: Schema validation for forms and data.
- **QuillJS**: Rich text editor for managing formatted content.
- **Redux**: A predictable state container for managing application-level state.
- **Shadcn UI**: A component library for building modern UI with Next.js and Tailwind CSS.

## 2. Installation

### 2.1. System Requirements

- Node.js >= 16.x
- NPM >= 7.x or Yarn >= 1.x

### 2.2. Steps to Install

**2.2.1. Install dependencies:** 

    Using npm:

    ```bash
    npm install
    ```

    Or using Yarn:

    ```bash
    yarn install
    ```
**2.2.2. Run the application:**

    To run the app in development mode:

    ```bash
    npm run dev
    ```

    Or using Yarn:

    ```bash
    yarn dev
    ```

    The application will be available at `http://localhost:3000`.

**2.2.3. Build for production:**

    If you want to build the application for production:

    ```bash
    npm run build
    npm run start
    ```

    Or using Yarn:

    ```bash
    yarn build
    yarn start
    ```

## Usage

- Visit `http://localhost:3000/home` to access the application.

## API Reference
The frontend utilizes data from the backend API, which can be found in the API documentation [Here](https://github.com/cogi2996/mif_api)
