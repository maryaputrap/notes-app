import React from "react";

function NotesHeader({ onSearch }) {
  return (
    <div className="notes-app__header">
      <h1>Notes App</h1>
      <input
        type="text"
        placeholder="Find Notes..."
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}

export default NotesHeader;
