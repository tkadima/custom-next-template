# Custom Next.js Template

This template sets up a Next.js project with Material-UI (MUI), Prettier, ESLint, and Axios. Follow the instructions below to get started.

## Getting Started

### Using the template

To create a new project using this template, run:

```bash
npx create-next-app -e https://github.com/tkadima/custom-next-template your-project-name
```

### Update package.json

After creating your project, update the package.json file to include your project's specific information:

- Name: Change the "name" field to your project name.
- Version: Update the "version" field if necessary.
- Description: Add a description for your project.
- Author: Add your name or your team's name.
- Script: Change all instances of "my-next-app" to your project name

## Running the project

### With NPM

To run the project locally with npm, use the following commands:

1. Install dependencies

```
npm install
```

2. Run the development server

```
npm run dev
```

Your application will be available at http://localhost:3000.

### With Docker

To run the project using Docker, follow these steps:

1. Build the Docker image:

```
npm run docker:build
```

2. Run the Docker container

```
npm run docker:run
```
