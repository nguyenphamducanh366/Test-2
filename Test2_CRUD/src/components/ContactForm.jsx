import React, { useState } from 'react';

const ContactForm = ({ initialData = {}, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: initialData.name || '',
    address: {
      ward: initialData.address?.ward || '',
      district: initialData.address?.district || '',
      city: initialData.address?.city || '',
    },
    phone: initialData.phone || '',
    email: initialData.email || '',
    website: initialData.website || '',
    bank: {
      name: initialData.bank?.name || '',
      accountNumber: initialData.bank?.accountNumber || '',
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 mb-4">
      <h2 className="card-title mb-4">
        {initialData.id ? 'Sửa tài khoản' : 'Tạo tài khoản'}
      </h2>
      
      <div className="row">
        {/* Name */}
        <div className="mb-3 col-md-6">
          <label className="form-label">Tên*</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        {/* Address */}
        <div className="mb-3 col-md-6">
          <label className="form-label">Địa chỉ</label>
          <input
            type="text"
            name="address.ward"
            value={formData.address.ward}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        
        <div className="mb-3 col-md-6">
          <label className="form-label">Phường</label>
          <input
            type="text"
            name="address.district"
            value={formData.address.district}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        
        <div className="mb-3 col-md-6">
          <label className="form-label">Thành Phố*</label>
          <input
            type="text"
            name="address.city"
            value={formData.address.city}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        {/* Contact Info */}
        <div className="mb-3 col-md-6">
          <label className="form-label">Số điện thoại*</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        
        <div className="mb-3 col-md-6">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        
        <div className="mb-3 col-md-6">
          <label className="form-label">Website</label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        {/* Bank Info */}
        <div className="mb-3 col-md-6">
          <label className="form-label">Tên ngân hàng</label>
          <input
            type="text"
            name="bank.name"
            value={formData.bank.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        
        <div className="mb-3 col-md-6">
          <label className="form-label">Số tài khoản</label>
          <input
            type="text"
            name="bank.accountNumber"
            value={formData.bank.accountNumber}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </div>

      <div className="d-flex justify-content-end gap-2 mt-4">
        <button
          type="button"
          onClick={onCancel}
          className="btn btn-outline-secondary"
        >
          Huỷ
        </button>
        <button
          type="submit"
          className="btn btn-primary"
        >
          {initialData.id ? 'Cập Nhập' : 'Tạo'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;