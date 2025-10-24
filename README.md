# Vampyr Form Builder

This is an Electron application built with React, TypeScript, and Vite.

## Project Structure

- `electron/main`: Main Electron process code.
- `electron/preload`: Preload script for the Electron renderer process.
- `src`: React application source code.
- `public`: Static assets.

## Development

To run the application in development mode:

```bash
npm install
npm run dev:electron
```

This will start the Vite development server for the renderer process and launch the Electron app.

## Build

To build the application for production:

```bash
npm install
npm run build
```

This will compile the main, preload, and renderer processes and package the Electron application.

## Available Scripts

Here are the main scripts available in `package.json`:

- `dev`: Runs the Vite development server for the renderer process.
- `build`: Builds the renderer process for production.
- `lint`: Lints the project files using ESLint.
- `preview`: Serves the production build locally for previewing.
- `electron`: Runs the Electron application directly (after a build).
- `start`: Runs the Electron application in preview mode (after a build).
- `dev:electron`: Starts the Vite development server for the renderer and launches the Electron app in development mode.
- `prebuild`: Runs the `electron-vite build` command before the main build.

## Features

### UI/UX

The application utilizes **Material-UI (MUI)** with a **dark theme** for a modern and consistent user experience.

### Routing

The application implements client-side routing using `react-router-dom` to navigate between different pages and views.

### Core Functionality

- **Character Creation**: Users can create new characters with various attributes and details.
- **Character Editing**: Existing characters can be edited and updated.
- **Dice Rolling**: The application provides functionality for throwing dice, likely for in-game actions or character stats.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

