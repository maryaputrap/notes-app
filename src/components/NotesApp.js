import React from "react";
import { getInitialData, showFormattedDate } from "../utils/data";
import NotesInput from "./NotesInput";
import NotesHeader from "./NotesHeader";
import AllNotesList from "./AllNotesList";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onChangeArchive = this.onChangeArchive.bind(this);
  }

  onSearchHandler(title) {
    this.setState((prevState) => {
      return {
        ...prevState,
        notes: prevState.notes.filter((note) =>
          note.title.toLowerCase().includes(title.toLowerCase())
        ),
      };
    });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: showFormattedDate(),
          },
        ],
      };
    });
  }

  onDeleteNoteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onChangeArchive(id) {
    const notes = this.state.notes.find((note) => note.id === id);
    notes.archived = !notes.archived;
    this.setState((prevState) => {
      return {
        notes: [...prevState.notes],
      };
    });
  }

  render() {
    return (
      <>
        <NotesHeader onSearch={this.onSearchHandler} />
        <div className="notes-app__body">
          <NotesInput addNote={this.onAddNoteHandler} />
          <AllNotesList
            notes={this.state.notes}
            onDelete={this.onDeleteNoteHandler}
            onArchive={this.onChangeArchive}
          />
        </div>
      </>
    );
  }
}

export default NotesApp;
