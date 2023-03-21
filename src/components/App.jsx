import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import Form from './Form';
import Filter from './Filter';
import ContactsList from './ContactsList';
import { AppBox } from './App.styled';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  function notifiesAlert(numberContact) {
    return toast.error(`${numberContact} is already in contacts.`);
  }
console.log(contacts)
  function checkСontact(newNumber) {
    return contacts.some(contact => contact.number === newNumber);
  }

  function onSubmit(name, number) {
    checkСontact(number)
      ? notifiesAlert(number)
      : dispatch(addContact(name, number));
  }

  return (
    <AppBox>
      <ToastContainer autoClose={2000} position="top-center" />
      <h1>Phonebook</h1>
      <Form onSubmit={onSubmit} />

      <h2>Contacts</h2>
      {contacts !== undefined && contacts.length > 0 ? (
        <>
          <Filter />
          <ContactsList />
        </>
      ) : (
        <p>Contacts list is empty</p>
      )}
    </AppBox>
  );
}
