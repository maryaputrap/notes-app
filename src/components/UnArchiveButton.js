import React from "react";

function UnArchiveButton({ id, onArchive }) {
  return (
    <button
      className="notes-item__unarchive-button"
      onClick={() => onArchive(id)}
    >
      Active
    </button>
  );
}

export default UnArchiveButton;
