import { useSelector, useDispatch } from 'react-redux';
import { selectAllcontacts, selectFilterState } from 'redux/contacts/selectors';
import css from './ContactsList.module.css';
import { deleteContact } from 'redux/contacts/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllcontacts);
  const filterValue = useSelector(selectFilterState);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <li key={id}>
            {name} {number}
            <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};
