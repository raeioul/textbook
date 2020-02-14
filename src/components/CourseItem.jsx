import React, { Component } from "react";

export default class CourseItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isEdit: false };
    this.editCourse = this.editCourse.bind(this);
    this.editCourseSubmit = this.editCourseSubmit.bind(this);
    this.deleteCourse = this.deleteCourse.bind(this);
  }
  deleteCourse() {
    const { id } = this.props.course;
    this.props.deleteCourse(id);
  }
  editCourse() {
    this.setState((prevState, props) => ({
      isEdit: !prevState.isEdit
    }));
  }
  editCourseSubmit() {
    this.setState((prevState, props) => ({
      isEdit: !prevState.isEdit
    }));
    this.props.editCourseSubmit(
      this.props.course.id,
      this.nameInput.value,
      this.descriptionInput.value,
      this.textbooksInput.value
    );
  }
  render() {
    const { id, name, description, textbooks } = this.props.course;
    return this.state.isEdit === true ? (
      <tr className="bg-warning" key={this.props.index}>
        <td>{id}</td>
        <td>
          <input
            ref={nameInput => (this.nameInput = nameInput)}
            defaultValue={name}
          />
        </td>
        <td>
          <input
            defaultValue={description}
            ref={descriptionInput => (this.descriptionInput = descriptionInput)}
          />
        </td>
        <td>
          <input
            ref={textbooksInput => (this.textbooksInput = textbooksInput)}
            defaultValue={textbooks}
          />
        </td>
        <td>
          <i className="far fa-save" onClick={this.editCourseSubmit}></i>
        </td>
        <td>
          <i className="fas fa-trash"></i>
        </td>
      </tr>
    ) : (
      <tr key={this.props.index}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{description}</td>
        <td>
          {textbooks != undefined
            ? textbooks.map(item => (
                <p>
                  {item.author} / {item.title}
                </p>
              ))
            : ""}
        </td>
        <td>
          <i className="far fa-edit" onClick={this.editCourse}></i>
        </td>
        <td>
          <i className="fas fa-trash" onClick={this.deleteCourse}></i>
        </td>
      </tr>
    );
  }
}
