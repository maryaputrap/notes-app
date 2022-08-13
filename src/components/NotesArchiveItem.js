import React from "react";
import DeleteButton from "./DeleteButton";
import NotesItemContent from "./NotesItemContent";
import UnArchiveButton from "./UnArchiveButton";

function NotesArchiveItem({ title, createdAt, body, id, onDelete, onArchive }) {
  return (
    <div className="notes-item">
      <NotesItemContent title={title} createdAt={createdAt} body={body} />
      <div className="notes-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <UnArchiveButton id={id} onArchive={onArchive} />
      </div>
    </div>
  );
}

export default NotesArchiveItem;
