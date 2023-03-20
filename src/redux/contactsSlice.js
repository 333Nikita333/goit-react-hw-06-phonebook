import { createSlice, nanoid } from '@reduxjs/toolkit';

const tasksInitialState = [
  { id: "0", name: 'Learn CSS', number: "789456" },
  { id: "1", name: 'Get JavaScript', number: "456123" },
  { id: "2", name: 'Master React', number: "147852" },
  { id: "3", name: 'Discover Redux', number: "258963" },
  { id: "4", name: 'Build amazing', number: "369852" },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: tasksInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(4),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
