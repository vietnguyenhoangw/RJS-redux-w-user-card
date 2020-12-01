//  create an action for dispatch redux
export function renameUser(text) {
  return {
    type: "RENAME_USER",
    text: text,
  };
}
