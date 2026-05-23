# Notes API

A REST API for managing notes. Built with Node.js and Express, using in-memory storage.

**Live API:** https://notes-api-production-66c9.up.railway.app

## Tech Stack

- Node.js + Express
- dotenv
- nodemon (dev)

## Getting Started

**Prerequisites:** Node.js 18+

**1. Clone the repo**
\`\`\`bash
git clone <your-repo-url>
cd notes-api
\`\`\`

**2. Install dependencies**
\`\`\`bash
npm install
\`\`\`

**3. Create .env file**
\`\`\`
PORT=3000
\`\`\`

**4. Start the dev server**
\`\`\`bash
npm run dev
\`\`\`

Server runs at `http://localhost:3000`

---
## API Endpoints

### GET /notes
Returns all notes.

**Response 200:**
\`\`\`json
[
  {
    "id": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    "title": "My note",
    "content": "Hello world",
    "createdAt": "2026-05-21T10:00:00.000Z",
    "updatedAt": "2026-05-21T10:00:00.000Z"
  }
]
\`\`\`

---

### GET /notes/:id
Returns a single note.

**Response 200:** note object
**Response 404:** `{ "error": "Note not found" }`

---

### POST /notes
Creates a new note.

**Body:**
\`\`\`json
{ "title": "string (required)", "content": "string (required)" }
\`\`\`

**Response 201:** created note object
**Response 400:** `{ "error": "Title and content are required" }`

---

### PUT /notes/:id
Updates a note's title and content.

**Body:**
\`\`\`json
{ "title": "string (required)", "content": "string (required)" }
\`\`\`

**Response 200:** updated note object
**Response 404:** `{ "error": "Note not found" }`
**Response 400:** `{ "error": "Title and content are required" }`

---

### DELETE /notes/:id
Deletes a note.

**Response 200:** `{ "message": "Note deleted" }`
**Response 404:** `{ "error": "Note not found" }`

---

## Deployment

Deployed to Railway. The `start` script (`node src/app.js`) is used in production.

> **Note:** This version uses in-memory storage -- data resets on every server restart. A database integration is the planned next step.