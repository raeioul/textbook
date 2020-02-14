import React, { Component } from "react";
import CourseItem from "./CourseItem.jsx";

export default class CourseList extends Component {
  render() {
    let courses = this.props.courseList;
    const trItem = courses.map((item, index) => (
      <CourseItem
        key={index}
        course={item}
        index={index}
        editCourseSubmit={this.props.editCourseSubmit}
        deleteCourse={this.props.deleteCourse}
      />
    ));
    return <tbody>{trItem}</tbody>;
  }
}
