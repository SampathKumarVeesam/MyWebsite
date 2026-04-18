# Architecture & Folder Structure

Understanding the layout of AppVerse 1.0's codebase helps maintain code quality and scale the application smoothly.

## Directory Tree

```
app/
├── Documentation/       # Comprehensive guides outlining the project scope, architecture, and setup
├── public/              # Static assets that are not bundled (e.g., favicons, images)
├── src/                 # The main source directory for React code
│   ├── components/      # Reusable UI elements (e.g., Shadcn UI elements like buttons, dialogs)
│   ├── hooks/           # Custom React hooks (e.g., useMediaQuery, useAuth)
│   ├── sections/        # Larger page sections or features (Landing, Dashboard content)
│   ├── types/           # TypeScript interfaces, types, and Zod schemas
│   ├── App.css          # App-specific css configurations
│   ├── App.tsx          # Root React component where React Router gets initiated
│   ├── index.css        # Global styles featuring Tailwind directives and CSS variables
│   └── main.tsx         # The React application entry point where `createRoot` is called
├── components.json      # Configuration file for Shadcn CLI
├── eslint.config.js     # Settings for ESLint
├── index.html           # Main HTML entry point for Vite
├── package.json         # Node.js dependencies and run scripts
├── tailwind.config.js   # Tailwind class overrides, themes, and plugin integrations
├── tsconfig.json        # TypeScript compiler options
└── vite.config.ts       # Vite bundler parameters, plugins, and path aliases
```

## Key Architectural Highlights

### Component Driven Design (CDD)
The UI is broken down into small, highly reusable components located in `src/components`. Most of these follow the Shadcn UI standard which integrates Radix UI for accessibility and Tailwind CSS for styling.

### TypeScript Integration
Strict typing mitigates runtime errors. Data models and prop types are rigorously defined in `src/types`. Forms use `zod` for declarative schema validation.

### State Management & Data
Currently, state is handled internally using React's native hooks (`useState`, `useContext`, `useReducer`). If the application grows, integrating a lightweight global store or server-state wrapper (like React Query) is recommended.

### Styling Strategy
The global design tokens are defined inside `index.css` leveraging CSS variables. `tailwind.config.js` consumes these variables to set up themes (such as the dark neon colors and animations). This strategy ensures that dark mode / light mode can be toggled via simple HTML class changes, and maintains consistency across all components.
