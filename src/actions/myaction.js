export const anotherName = (name) => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((response) => {
        dispatch({ type: "CHANGE_NAME", payload: response[0].name });
      });
  };
};
