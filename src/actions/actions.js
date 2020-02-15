import { NEW_MESSAGE } from "./types";

export const newMessage = messages => {
  return {
    type: NEW_MESSAGE,
    messages
  };
};
