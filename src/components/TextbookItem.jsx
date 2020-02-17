import React, { Component } from "react";
import "../App.css";

export default class TextbookItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textbooks: [{ author: "", title: "" }]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addClick() {
    this.setState(prevState => ({
      textbooks: [...prevState.textbooks, { author: "", title: "" }]
    }));
  }

  createUI() {
    return this.state.textbooks.map((e, i) => (
      <div key={i}>
        <input
          placeholder="Author Name"
          name="author"
          value={e.author || ""}
          onChange={this.handleChange.bind(this, i)}
        />
        <input
          placeholder="Title"
          name="title"
          value={e.title || ""}
          onChange={this.handleChange.bind(this, i)}
        />
        <i
          className="fas fa-trash"
          value="remove"
          onClick={this.removeClick.bind(this, i)}
        ></i>
      </div>
    ));
  }

  handleChange(i, e) {
    const { name, value } = e.target;
    let textbooks = [...this.state.textbooks];
    textbooks[i] = { ...textbooks[i], [name]: value };
    this.setState({ textbooks });
  }

  removeClick(i) {
    let textbooks = [...this.state.textbooks];
    textbooks.splice(i, 1);
    this.setState({ textbooks });
  }

  handleSubmit(event) {
    this.props.textbooksData(this.state.textbooks);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.createUI()}

        <i
          className="fa fa-plus"
          aria-hidden="true"
          value="Add+ textbooks"
          onClick={this.addClick.bind(this)}
        ></i>
        <input type="submit" value="Submit" className="btn btn-dark" />
      </form>
    );
  }
}
