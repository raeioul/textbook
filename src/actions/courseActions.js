export function addCourse(student) {
  return {
    type: "ADD_COURSE",
    payload: student
  };
}

export function deleteCourse(Id) {
  return {
    type: "DELETE_COURSE",
    payload: Id
  };
}

export function updateCourse(student) {
  return {
    type: "UPDATE_COURSE",
    payload: student
  };
}
