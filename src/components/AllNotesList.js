import React from "react";
import NotesActiveList from "./NotesActiveList";
import NotesArchiveList from "./NotesArchiveList";
import { showFormattedDate } from "../utils/data";

function AllNotesList({ notes, onDelete, onArchive, createdAt }) {
  return (
    <>
      <NotesActiveList
        notes={notes}
        {...notes}
        createdAt={showFormattedDate(createdAt)}
        onDelete={onDelete}
        onArchive={onArchive}
      />
      <NotesArchiveList
        notes={notes}
        {...notes}
        createdAt={showFormattedDate(createdAt)}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </>
  );
}

export default AllNotesList;
