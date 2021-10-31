import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";

function Contacts() {
  const [contacts, setContacts] = useState([
    { fullname: "Beşir Gündüz", phonenumber: "05317674565" },
    { fullname: "Veli Gündüz", phonenumber: "05317674565" },
    { fullname: "Rıza Gündüz", phonenumber: "05317674565" },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts App</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
