import React from "react";

function NotesItemTitle({ title, createdAt }) {
  return (
    <div className="notes-item__title">
      {title}
      <div className="notes-item__date">{createdAt}</div>
    </div>
  );
}

export default NotesItemTitle;
