import React from 'react';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onEdit, onDelete }) => {
  if (contacts.length === 0) {
    return (
      <div className="text-center py-5">
        <p className="text-muted">Chưa có tài khoản nào</p>
      </div>
    );
  }

  return (
    <div className="mt-4 table-responsive">
      <table className="table table-striped table-hover">
        <thead className="table-light">
          <tr>
            <th>Tên</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th>Website</th>
            <th>Ngân hàng</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <ContactItem 
              key={contact.id} 
              contact={contact} 
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;