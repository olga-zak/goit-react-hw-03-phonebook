import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <ContactListItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            deleteContact={deleteContact}
          />
        );
      })}
    </ul>
  );
};
