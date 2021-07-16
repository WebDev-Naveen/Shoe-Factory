const list = true;

const listreducer = (state = list, action) => {
  if (action.type === "LIST") {
    return (state = action.payload);
  }
  return state;
};
export default listreducer;
