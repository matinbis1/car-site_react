import React, { useState } from 'react';
import axios from 'axios';
import './BookingForm.css'; // Импортируйте файл стилей BookingForm.css

const BookingForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://localhost:7290/User/CreateUser', {
        name,
        email,
        phone_Number: phone,
      });
      onClose();
    } catch (err) {
      console.error('Error saving booking', err);
    }
  };

  return (
    <div className="booking-form">
      <form onSubmit={handleSubmit}>
        <label>
          Имя:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Телефон:
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <button type="submit">Забронировать</button>
      </form>
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
};

export default BookingForm;
