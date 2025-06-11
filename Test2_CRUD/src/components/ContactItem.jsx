import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ContactItem = ({ contact, onEdit, onDelete }) => {
  return (
    <tr>
      <td className="align-middle">
        <strong>{contact.name}</strong>
      </td>
      <td className="align-middle">
        {contact.address.ward}, {contact.address.district}, {contact.address.city}
      </td>
      <td className="align-middle">
        {contact.phone}
      </td>
      <td className="align-middle">
        {contact.email || '-'}
      </td>
      <td className="align-middle">
        {contact.website ? (
          <a href={contact.website} target="_blank" rel="noopener noreferrer">
            {contact.website}
          </a>
        ) : '-'}
      </td>
      <td className="align-middle">
        {contact.bank.name ? (
          <div>
            <div><strong>{contact.bank.name}</strong></div>
            <div>{contact.bank.accountNumber}</div>
          </div>
        ) : '-'}
      </td>
      <td className="align-middle">
        <div className="d-flex gap-2">
          <button 
            onClick={() => onEdit(contact)}
            className="btn btn-sm btn-outline-primary"
            title="Chỉnh sửa"
          >
            <FaEdit />
          </button>
          <button 
            onClick={() => onDelete(contact.id)}
            className="btn btn-sm btn-outline-danger"
            title="Xóa"
          >
            <FaTrash />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ContactItem;