# CSE 341 — Professional Profile App

A full-stack web app that displays a professional's profile page, with the content served dynamically from a Node/Express backend connected to MongoDB. Built as a team project for CSE 341 (Web Backend Development).

## Overview

The application pairs a static front end with an Express + MongoDB backend. The front end requests professional data from the backend's API and renders it into a styled profile page — including the person's name, photo, role/description, work summary, and links to their LinkedIn and GitHub profiles.

This project was an introduction to building a backend API for an existing front end: connecting Express to MongoDB, exposing a data endpoint, and wiring the front end to consume it.

## Architecture

- **Frontend** (`frontend/`) — `index.html`, `script.js`, and `style.css`. The script fetches data from the backend and populates the profile page.
- **Backend** (`backend/`) — an Express server (`app.js`) with a `/professional` route, a controller that reads from MongoDB, and a database connection module.

## API

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/professional` | Returns the professional's profile data |

## Tech Stack

| Area | Technology |
| --- | --- |
| Runtime | Node.js |
| Framework | Express |
| Database | MongoDB |
| Front end | HTML, CSS, JavaScript |

## Getting Started

Requires Node.js and a MongoDB database.

```bash
git clone https://github.com/deanabriggs/cse341-node.git
cd cse341-node/backend
npm install
```

Create a `.env` file with your MongoDB connection string, then start the server:

```bash
npm start
```

The backend listens on port `8080` by default. Open the front end (`frontend/index.html`) to view the profile page, which fetches its data from the running backend.

## Contributors

This was a team project for CSE 341:

- Deana Briggs ([@deanabriggs](https://github.com/deanabriggs)) — backend (Express/MongoDB API, data layer)
- Nathan Birch ([@nathanbirch](https://github.com/nathanbirch)) — front end

