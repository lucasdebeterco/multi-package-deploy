# NPM Package Management with Automated CI/CD

This project is a monorepo for managing multiple npm packages using a workspace structure. It includes a custom release script for publishing packages to npm and a GitHub Actions workflow for automated CI/CD and publish.


### Directories
- **`src/packages/`**: Contains individual npm packages, each with its own implementation.
- **`src/scripts/release.js`**: A Node.js script for publishing packages.
- **`.github/workflows/publish.yml`**: GitHub Actions workflow for automated package publishing.

## Scripts

### `release.js`
A Node.js script for managing the publication of npm packages. It supports both individual package updates and publishing all packages.

#### Key Features
- Reads the package name from CLI arguments (`--package=`).
- Uses `NPM_TOKEN` from environment variables to authenticate with npm.
- Dynamically creates and removes a temporary `.npmrc` file.
- Supports:
    - Publishing all packages.
    - Publishing a single package by specifying its name.

#### Example Usage
- Publish all packages:
  ```bash
  npm run release

- Publish a specific package:
  ```bash
  npm run release --package=button


### CI/CD Workflow
GitHub Actions: publish.yml
Automates the process of building, versioning, and publishing packages to npm upon a push to the main branch.

Workflow Steps
1. Checkout repository: Uses the actions/checkout action to fetch the latest code.
2. Set up Node.js: Installs Node.js version 18 and sets up npm caching. 
3. Install dependencies: Runs npm install to install project dependencies. 
4. Run release script: Executes release.js to publish packages to npm.

### Environment Variables
```NPM_TOKEN```

Required for authenticating with npm, Set as a secret in the GitHub repository.