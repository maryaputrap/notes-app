import React from "react";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      max: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState((prevState) => {
      while (event.target.value.length < this.state.max + 1) {
        return {
          ...prevState,
          title: event.target.value,
        };
      }
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className="notes-input" onSubmit={this.onSubmitEventHandler}>
        <h2>Create New Note</h2>
        <p className="notes-input__title__char-limit">
          Character Left : {this.state.max - this.state.title.length}
        </p>
        <input
          type="text"
          className="notes-input__title"
          placeholder="Note title.."
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
        <input
          type="text"
          className="notes-input__body"
          placeholder="Write your note here.."
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
        />
        <button type="submit">Add Note</button>
      </form>
    );
  }
}

export default NotesInput;
