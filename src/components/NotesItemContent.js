import React from "react";
import NotesItemBody from "./NotesItemBody";
import NotesItemTitle from "./NotesItemTitle";
import { showFormattedDate } from "../utils/data";

function NotesItemContent({ title, createdAt, body }) {
  return (
    <div className="notes-item__content">
      <NotesItemTitle title={title} createdAt={showFormattedDate(createdAt)} />
      <NotesItemBody body={body} />
    </div>
  );
}

export default NotesItemContent;
