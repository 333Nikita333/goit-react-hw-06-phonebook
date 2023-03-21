import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: '0', name: 'Learn CSS', number: '789456' },
  { id: '1', name: 'Get JavaScript', number: '456123' },
  { id: '2', name: 'Master React', number: '147852' },
  { id: '3', name: 'Discover Redux', number: '258963' },
  { id: '4', name: 'Build amazing', number: '369852' },
];

const contactDataSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
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
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactDataSlice.actions;
export const contactsReducer = contactDataSlice.reducer;
