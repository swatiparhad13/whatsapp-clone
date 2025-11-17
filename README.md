WhatsApp Web-like Chat App (React)

A simple WhatsApp Web–style real-time chat application built with React, InstantDB, and IndexedDB.

🚀 Features

Contact list on the left, chat window on the right

Real-time messaging using InstantDB

Offline message storage with IndexedDB

Send & receive messages instantly

Responsive WhatsApp-like UI (CSS Flexbox/Grid)

Uses React Hooks, Context API, useReducer, and custom hooks

🛠 Tech Stack

React.js

InstantDB (real-time backend)

IndexedDB (offline/local database)

CSS for layout & animations

📦 Installation
git clone <repo-url>
cd <project-folder>
npm install
npm start

⚙️ Setup

Create a .env file:

REACT_APP_INSTANTDB_API_KEY=your_key
REACT_APP_INSTANTDB_PROJECT_ID=your_project_id

📁 Main Components

ContactList – displays contacts

ChatWindow – shows messages

Message – individual message component

MessageInput – send new messages

📚 Concepts Used

React Hooks (useState, useEffect, useMemo, useReducer)

React Context for global state

Custom hooks for InstantDB & IndexedDB

Offline-first data syncing

