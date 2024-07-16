import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import s from "./Contact.module.css";

const Contact = ({ name, number, handleDeleteContact, id }) => {
  return (
    <div className={s.wrapper}>
      <div>
        <p className={s.input}>
          <FaUser className={s.icon} />
          <span className={s.name}>{name}</span>
        </p>
        <p className={s.input}>
          <FaPhone className={s.icon} />
          <span>{number}</span>
        </p>
      </div>
      <button onClick={() => handleDeleteContact(id)} type="button">
        Delete
      </button>
    </div>
  );
};

export default Contact;
