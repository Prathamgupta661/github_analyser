# GitHub User Analyzer

GitHub User Analyzer is a React-based web application that allows users to search for GitHub profiles and analyze their repositories and commit activity. The app provides a paginated list of repositories and a chart displaying commit activity for the last 30 days.

## Features

- **Search GitHub Users**: Enter a GitHub username to fetch their public repositories.
- **Repository List**: View a paginated list of repositories with details like name, description, stars, and language.
- **Commit Activity Chart**: Visualize commit activity for the last 30 days using a bar chart.
- **Responsive Design**: Fully responsive layout for desktop and mobile devices.
- **Skeleton Loading**: Displays skeleton loaders while fetching data.
- **Error Handling**: Handles errors like user not found or API rate limits.

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Charting Library**: Recharts
- **Build Tool**: Vite
- **Utilities**: clsx, tailwind-merge, date-fns

## Project Structure

```
src/
├── App.tsx               # Main application component
├── components/           # Reusable components
│   ├── SearchBar.tsx     # Search input and button
│   ├── RepoList.tsx      # Displays a list of repositories
│   ├── CommitsChart.tsx  # Displays commit activity chart
│   ├── SkeletonChart.tsx # Skeleton loader for chart
│   ├── SkeletonRepoList.tsx # Skeleton loader for repo list
│   ├── Footer.tsx        # Footer component
│   └── ui/               # UI components (Button, Card, Input, Skeleton)
├── lib/
│   └── utils.ts          # Utility functions
├── index.css             # Tailwind CSS configuration
├── App.css               # Additional styles
├── main.tsx              # Application entry point
└── vite-env.d.ts         # Vite environment types
```

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Prathamgupta661/github_analyser.git
   cd github_analyser
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the Development Server

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

### Building for Production

To build the project for production:

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Previewing the Production Build

To preview the production build locally:

```bash
npm run preview
```

## Deployment

You can deploy the app to any static hosting service like Vercel, Netlify, or GitHub Pages. Here's how to deploy it to Vercel:

1. Install the Vercel CLI:

   ```bash
   npm install -g vercel
   ```

2. Deploy the project:

   ```bash
   vercel
   ```

3. Follow the prompts to complete the deployment.

Alternatively, you can upload the contents of the `dist` folder to any static hosting service.


## Known Issues

- **API Rate Limits**: The GitHub API has rate limits for unauthenticated requests. If you encounter a "rate limit exceeded" error, try again later or authenticate with a GitHub token.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.txt) file for details.

## Author

Developed by [Pratham Gupta](https://github.com/Prathamgupta661).