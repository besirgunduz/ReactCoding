import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const onChangeInput = (e) => setFilterText(e.target.value);

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  console.log("filtered", contacts);

  return (
    <div>
      <input
        placeholder="Filter contact"
        value={filterText}
        onChange={onChangeInput}
      />

      <ul>
        {filtered.map((contact, index) => (
          <li key={index}>{contact.fullname}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
