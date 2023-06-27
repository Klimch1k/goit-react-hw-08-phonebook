import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import css from './ContactsForm.module.css';
import {selectAllcontacts} from '../../redux/contacts/selectors'

export const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllcontacts);

 const handleSubmit = e => {
   e.preventDefault();
   const contactName = e.currentTarget.name.value;
   const contactNumber = e.currentTarget.number.value;

    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === contactName.toLowerCase()
    );

    if (isDuplicate) {
      alert('This contact already exists!');
      return;
   }
   
   const contact = {
     name: contactName,
     number: contactNumber,
   };

   if (contact !== '') {
     dispatch(addContact(contact));
     e.currentTarget.reset();
     return;
   }
   alert('Task cannot be empty. Enter some text!');

  
 };


  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[A-Za-z\u0080-\uFFFF ']+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="^(\+?[0-9.\(\)\-\s]*)$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};