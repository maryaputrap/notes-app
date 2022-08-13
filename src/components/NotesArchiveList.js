import React from "react";
import NotesArchiveItem from "./NotesArchiveItem";
import { showFormattedDate } from "../utils/data";

function NotesArchiveList({ notes, onDelete, onArchive }) {
  const list = notes.filter((note) => note.archived === true);
  if (list.length === 0) {
    return (
      <div className="notes-list__empty-message">
        <p>Cannot find archive notes !</p>
      </div>
    );
  }
  return (
    <>
      <h2>Archive Notes</h2>
      <div className="notes-draft">
        <div className="notes-list">
          {list.map((note) => (
            <NotesArchiveItem
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

export default NotesArchiveList;
