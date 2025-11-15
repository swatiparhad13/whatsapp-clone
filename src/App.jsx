// src/App.jsx
import React from "react";
import "./styles/app.css";
import ContactList from "./components/ContactList/ContactList";
import ChatWindow from "./components/ChatWindow/ChatWindow";

export default function App() {
  return (
    <div className="app-root">
      <aside className="left-col">
        <ContactList />
      </aside>
      <main className="right-col">
        <ChatWindow />
      </main>
    </div>
  );
}
