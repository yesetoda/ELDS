import React, { useState } from 'react';

const ContactsPage = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '555-555-5555' },
  ]);

  const [newContact, setNewContact] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddContact = () => {
    if (newContact.name && newContact.email && newContact.phone) {
      setContacts((prevContacts) => [
        ...prevContacts,
        { id: prevContacts.length + 1, ...newContact },
      ]);
      setNewContact({ name: '', email: '', phone: '' });
    }
  };

  return (
    <div>
      <header>
        <h1>Contacts</h1>
      </header>

      <div className="container">
        <div className="new-contact-form">
          <h2>Add New Contact</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newContact.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newContact.email}
            onChange={handleInputChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={newContact.phone}
            onChange={handleInputChange}
          />
          <button onClick={handleAddContact}>Add Contact</button>
        </div>

        <h2>Contacts</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactsPage;