import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    console.log(contacts);
  });

  return (
    <div>
      Contacts
      <List />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
