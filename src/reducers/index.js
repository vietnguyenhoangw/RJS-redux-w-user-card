// reducer get 2 parameters is state and actions.
export default (state, action) => {
  switch (action.type) {
    case "RENAME_USER":
      return {
        ...state,
        name: action.text,
      };
    default:
      return state;
  }
};
