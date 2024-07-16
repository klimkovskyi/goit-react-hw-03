import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import contactsData from "./contacts.json";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const getInitialContacts = () => {
    const savedContacts = window.localStorage.getItem("savedContacts");
    return savedContacts?.length ? JSON.parse(savedContacts) : contactsData;
  };

  const [contacts, setContacts] = useState(getInitialContacts);
  const [inputValue, setInputValue] = useState("");

  const handleDeleteContact = id => {
    setContacts(contacts => contacts.filter(contact => contact.id !== id));
  };

  const handleChangeInput = e => {
    setInputValue(e.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleAddContact = newContact => {
    setContacts(prev => [...prev, newContact]);
  };

  useEffect(() => {
    window.localStorage.setItem("savedContacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", color: "teal" }}>Phonebook</h1>
        <ContactForm onAdd={handleAddContact} />
        <SearchBox
          handleChangeInput={handleChangeInput}
          inputValue={inputValue}
        />
        <ContactList
          contacts={filteredContacts}
          handleDeleteContact={handleDeleteContact}
        />
      </div>
    </>
  );
}

export default App;
