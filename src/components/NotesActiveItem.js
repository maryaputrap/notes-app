import React from "react";
import DeleteButton from "./DeleteButton";
import NotesItemContent from "./NotesItemContent";
import ArchiveButton from "./ArchiveButton";

function NotesActiveItem({ title, createdAt, body, id, onDelete, onArchive }) {
  return (
    <div className="notes-item">
      <NotesItemContent title={title} createdAt={createdAt} body={body} />
      <div className="notes-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton id={id} onArchive={onArchive} />
      </div>
    </div>
  );
}

export default NotesActiveItem;
