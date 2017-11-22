export default (state={name:""},action) => {
  switch (action.type) {
    case "CREATE":
        console.log(action.payload);
        state = {
          ...state,
          name : "Hello World"+action.payload
        }
      break;
  }
  return state;
};
