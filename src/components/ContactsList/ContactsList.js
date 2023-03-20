import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem';
import { List } from './ContactsList.styled';

const ContactsList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactsList;
// {contacts
//   .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
//   .map(({ id, name, number }) => (
//     <ContactListItem key={id} id={id} name={name} number={number} />
//   ))}
