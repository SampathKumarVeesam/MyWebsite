# Setup & Installation Guide

This guide will help you install, run, and build the AppVerse 1.0 application locally.

## Prerequisites
- **Node.js**: Require version 20+ (as specified in `info.md`).
- **NPM**: Package manager (comes with Node.js).

## Installation Step-by-Step

### 1. Install Dependencies
Open your terminal inside the `app` directory and run:
```bash
npm install
```
This command installs all the necessary dependencies listed in `package.json`, including React, Vite, Tailwind CSS, Framer Motion, and various Radix UI components.

### 2. Start the Development Server
To start developing locally with Hot Module Replacement (HMR):
```bash
npm run dev
```
Vite will start up a local server (typically at `http://localhost:5173`). Open this URL in your web browser to view the application in action.

### 3. Build for Production
When it's time to generate the production-ready static files, run:
```bash
npm run build
```
This triggers TypeScript type-checking (`tsc -b`) and ensures the application is safely built. The bundled output will be placed inside the `dist` folder.

### 4. Linting
To check the codebase for syntax or stylistic errors, run:
```bash
npm run lint
```
The project utilizes ESLint with type-aware rules for a strictly typed TypeScript environment.

### 5. Preview Production Build
You can test the built application locally using the Vite preview command:
```bash
npm run preview
```
This serves the contents of the `dist` folder to ensure everything works smoothly mimicking a production environment.
