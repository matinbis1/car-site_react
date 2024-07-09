import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker'; // Импортируем компонент выбора даты
import 'react-datepicker/dist/react-datepicker.css'; // Импортируем стили для компонента выбора даты
import './BookingForm.css'; // Импортируем файл стилей BookingForm.css

const BookingForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [governmentNumber, setGovernmentNumber] = useState('');
  const [model, setModel] = useState('');
  const [startDate, setStartDate] = useState(null); // Состояние для начальной даты
  const [endDate, setEndDate] = useState(null); // Состояние для конечной даты

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Отправляем запрос на создание пользователя
      const response = await axios.post('https://localhost:7290/User/CreateUser', {
        name,
        email,
        phone_Number: phone,
      });

      // Извлекаем id созданного пользователя из ответа сервера
      const userId = response.data.id;
      console.log('User Response:', response.data.id);
      // Отправляем запрос на создание машины
      await axios.post('https://localhost:7290/Car/CreateCar', {
        userId, // Используем userId для создания машины
        governmentNumber,
        model,
      });

      // Отправляем запрос на создание аренды
      await axios.post('https://localhost:7290/Rent/CreateRent', {
        start_Date: startDate.toISOString(), // Преобразуем дату в формат ISOString
        end_Date: endDate.toISOString(), // Преобразуем дату в формат ISOString
        user_Id: userId,
        car_Id: userId, // Используем userId как car_Id (примерно, можете подтвердить или изменить)
      });

      // Закрываем форму после успешного бронирования
      onClose();
    } catch (error) {
      console.error('Ошибка при бронировании', error);
    }
  };

  return (
    <div className="booking-form">
      <form onSubmit={handleSubmit}>
        <label>
          Имя:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Телефон:
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </label>
        <label>
          Номер автомобиля:
          <input type="text" value={governmentNumber} onChange={(e) => setGovernmentNumber(e.target.value)} required />
        </label>
        <label>
          Модель автомобиля:
          <input type="text" value={model} onChange={(e) => setModel(e.target.value)} required />
        </label>
        <label>
          Дата начала парковки:
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            placeholderText="Выберите дату"
            required
          />
        </label>
        <label>
          Дата окончания парковки:
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={startDate || new Date()}
            placeholderText="Выберите дату"
            required
          />
        </label>
        <button type="submit">Забронировать</button>
      </form>
      <button className="close-button" onClick={onClose}>Закрыть</button>
    </div>
  );
};

export default BookingForm;
