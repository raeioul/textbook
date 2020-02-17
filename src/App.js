import React, { Component } from "react";
import "./App.css";
import CourseList from "./components/CourseList.jsx";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addCourse, deleteCourse, updateCourse } from "./actions/courseActions";

class App extends Component {
  constructor(props) {
    super(props);
    this.addNewCourse = this.addNewCourse.bind(this);
    this.deleteCourse = this.deleteCourse.bind(this);
    this.editCourseSubmit = this.editCourseSubmit.bind(this);
  }

  addNewCourse() {
    this.props.addCourse({
      id:
        Math.max(
          ...this.props.courseList.map(function(o) {
            return o.id;
          })
        ) + 1,
      name: "",
      description: 1,
      textbooks: []
    });
  }

  deleteCourse(id) {
    let r = window.confirm("Do you want to delete this item");
    if (r === true) {
      this.props.deleteCourse(id);
    }
  }
  editCourseSubmit(id, name, description, textbooks) {
    this.props.updateCourse({
      id: id,
      name: name,
      description: description,
      textbooks: textbooks
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">Course Registry</div>
              <div className="card-body">
                <table className="table table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Textbooks (autor/title)</th>
                      <th>Edit/Save</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <CourseList
                    deleteCourse={this.deleteCourse}
                    courseList={this.props.courseList}
                    editCourseSubmit={this.editCourseSubmit}
                  />
                </table>
                <button
                  className="btn btn-dark pull-left"
                  onClick={this.addNewCourse}
                >
                  Add New
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    courseList: state
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addCourse: addCourse,
      deleteCourse: deleteCourse,
      updateCourse: updateCourse
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
