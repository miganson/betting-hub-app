# React Casino Game Portal

An online casino game portal built with React, featuring game categories, search functionality, and provider filters.

## Description

This project is a React-based online casino game portal that allows users to browse games by category, search for games, and filter games by providers. It features a responsive design with components like headers, footers, banners, and category bars to enhance user experience.

## Features

- **Browse Games by Category**: Navigate through various game categories such as Start, New, Slots, Live, Jackpots, Table Games, Bingo, and Others.
- **Search Functionality**: Search for games using the search bar to quickly find your favorite games.
- **Filter by Game Providers**: Filter games based on different game providers.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Sticky Header and Footer**: Easy navigation with fixed header and footer components.

## Prerequisites

- **Node.js**
- **npm** or **yarn**

## Usage

To start the development server:

```bash
npm run dev
```

or with yarn:

```bash
yarn start
```

This will start the application on `http://localhost:5173` by default.


## Components Overview

### App

The root component that wraps the application with `CategoryProvider` and renders the main content.

### Header

Displays the application header.

### Banner

Shows a banner at the top of the application. the image is loaded through a mock API.

### CategoryBar

Contains the categories for browsing games and includes a search component for searching games.

### Category

Displays the list of games filtered by the selected category, search query, and active providers. Images are loaded through a mock API.

### GameProvider

Provides a modal for filtering games by providers.

### Footer

Contains navigation links at the bottom of the application.

### Contexts

- **CategoryContext**: Manages the state for active categories, search queries, search activation, filter modal visibility, and active game providers.

### Data

- **GameList.tsx**: Contains the list of games with details such as ID, name, category, game provider, and image location.
- **ProviderList.tsx**: Contains the list of game providers with details such as ID, name, and logo location.

### Assets

- Images and icons for games, providers, and UI elements located in the `src/assets` directory.

## Dependencies

The project uses the following main dependencies:

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Bootstrap**: For responsive design and styling.
- **React Context API**: For state management across components.
---
