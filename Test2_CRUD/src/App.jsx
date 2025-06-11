import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { 
  getContacts, 
  createContact, 
  updateContact, 
  deleteContact 
} from './api/contacts';

function App() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await getContacts();
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const handleCreate = async (contactData) => {
    try {
      await createContact(contactData);
      fetchContacts();
      setShowForm(false);
    } catch (error) {
      console.error('Error creating contact:', error);
    }
  };

  const handleUpdate = async (contactData) => {
    try {
      await updateContact(editingContact.id, contactData);
      fetchContacts();
      setEditingContact(null);
      setShowForm(false);
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa tài khoản này?')) {
      try {
        await deleteContact(id);
        fetchContacts();
      } catch (error) {
        console.error('Error deleting contact:', error);
      }
    }
  };

  const handleFormSubmit = (formData) => {
    if (editingContact) {
      handleUpdate(formData);
    } else {
      handleCreate(formData);
    }
  };

  const handleEditClick = (contact) => {
    setEditingContact(contact);
    setShowForm(true);
  };

 return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Quản lý tài khoản</h1>
      
      {showForm ? (
        <div className="card p-4 mb-4">
          <ContactForm
            initialData={editingContact || {}}
            onSubmit={handleFormSubmit}
            onCancel={() => {
              setEditingContact(null);
              setShowForm(false);
            }}
          />
        </div>
      ) : (
        <div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Danh sách tài khoản</h2>
            <button
              onClick={() => setShowForm(true)}
              className="btn btn-success"
            >
              Thêm tài khoản
            </button>
          </div>
          <ContactList 
            contacts={contacts} 
            onEdit={handleEditClick}
            onDelete={handleDelete}
          />
        </div>
      )}
    </div>
  );
}

export default App;