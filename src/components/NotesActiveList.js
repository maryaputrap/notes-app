import React from "react";
import NotesItem from "./NotesItem";
import { showFormattedDate } from "../utils/data";

function NotesActiveList({ notes, onDelete, onArchive }) {
  const list = notes.filter((note) => note.archived === false);
  if (list.length === 0) {
    return (
      <div className="notes-list__empty-message">
        <p>Cannot find active notes !</p>
      </div>
    );
  }
  return (
    <>
      <h2>Active Notes</h2>
      <div className="notes-draft">
        <div className="notes-list">
          {list.map((note) => (
            <NotesItem
              id={note.id}
              title={note.title}
              body={note.body}
              onArchive={onArchive}
              createdAt={showFormattedDate(note.createdAt)}
              onDelete={onDelete}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default NotesActiveList;
