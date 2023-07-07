/* import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    selectedMail: null,
    sendMessageIsOpen: false,
  },
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    deleteMail: (state) => {
      // Clear the selectedMail when deleting
      state.selectedMail = null;
    },
  },
});

export const {
  selectMail,
  openSendMessage,
  closeSendMessage,
  deleteMail, // Add deleteMail action
} = mailSlice.actions;

export const selectOpenMail = (state) => state.mail.selectedMail;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer; */


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedMail: null,
  sendMessageIsOpen: false,
  isRead: {}, // Store the read status for each email
};

export const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;

      // Mark the selected email as read
      state.isRead[action.payload.id] = true;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    deleteMail: (state) => {
      // Clear the selectedMail when deleting
      state.selectedMail = null;
    },
  },
});

export const {
  selectMail,
  openSendMessage,
  closeSendMessage,
  deleteMail,
} = mailSlice.actions;

export const selectOpenMail = (state) => state.mail.selectedMail;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectIsRead = (state) => state.mail.isRead; // Add selectIsRead selector

export default mailSlice.reducer;

