import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={s.item}>
            <Contact
              name={name}
              number={number}
              id={id}
              handleDeleteContact={handleDeleteContact}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
