import ContactListItem from 'components/ContactListItem';
import { List } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  return (
    <List>
      {contacts
        .filter(({ name }) =>
          name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(({ id, name, number }) => (
          <ContactListItem key={id} id={id} name={name} number={number} />
        ))}
    </List>
  );
};

export default ContactsList;
