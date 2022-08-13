import React from "react";
import { showFormattedDate } from "../utils/data";

function NotesItemTitle({ title, createdAt }) {
  return (
    <div className="notes-item__title">
      {title}
      <div className="notes-item__date">{showFormattedDate(createdAt)}</div>
    </div>
  );
}

export default NotesItemTitle;
