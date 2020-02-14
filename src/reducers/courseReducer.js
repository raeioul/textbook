const courseReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_COURSE":
      let stateCopy = [...state, action.payload];
      localStorage.setItem("courses", JSON.stringify(stateCopy));
      return stateCopy;

    case "DELETE_COURSE":
      stateCopy = state.filter(x => x.id !== action.payload);
      localStorage.setItem("courses", JSON.stringify(stateCopy));
      return stateCopy;

    case "UPDATE_COURSE":
      stateCopy = state.map(course => {
        const { id, name, description, textbooks } = action.payload;
        if (course.id === id) {
          course.name = name;
          course.description = description;
          course.textbooks = textbooks;
        }
        return course;
      });
      localStorage.setItem("courses", JSON.stringify(stateCopy));
      return stateCopy;

    default:
      return state;
  }
};
export default courseReducer;
