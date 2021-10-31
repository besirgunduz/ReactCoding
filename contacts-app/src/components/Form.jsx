import { useState, useEffect } from "react";

function Form({ addContact, contacts }) {
  const [form, setForm] = useState({ fullname: "", phonenumber: "" });

  useEffect(() => {
    setForm({ fullname: "", phonenumber: "" });
  }, [contacts]);

  const onChangeInput = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault(); // sayfa yenilemeyi durdurur.

    if (form.fullname === "" || form.phonenumber === "") {
      return false;
    }

    addContact([...contacts, form]);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="Full Name"
          value={form.fullname}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          name="phonenumber"
          placeholder="Phone Number"
          value={form.phonenumber}
          onChange={onChangeInput}
        />
      </div>
      <div className="btn">
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
