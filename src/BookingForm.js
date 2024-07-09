import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BookingForm.css';

const BookingForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [governmentNumber, setGovernmentNumber] = useState('');
  const [model, setModel] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [minimalVoltage, setMinimalVoltage] = useState('');
  const [selectedTarif, setSelectedTarif] = useState('');
  const [tarifOptions, setTarifOptions] = useState([]);

  useEffect(() => {
    const fetchTarifOptions = async () => {
      try {
        const response = await axios.get('https://localhost:7290/Tarif/GetAllTarifs');
        setTarifOptions(response.data);
      } catch (error) {
        console.error('Ошибка загрузки тарифов', error);
      }
    };

    fetchTarifOptions();
  }, []);

  const handleTarifChange = (e) => {
    setSelectedTarif(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Отправляем запрос на создание пользователя
      const userResponse = await axios.post('https://localhost:7290/User/CreateUser', {
        name,
        email,
        phone_Number: phone,
      });

      const userId = userResponse.data.id;

      // Отправляем запрос на создание машины
      const carResponse = await axios.post('https://localhost:7290/Car/CreateCar', {
        userId,
        governmentNumber,
        model,
        minimalVoltage,
      });

      console.log('Car Response:', carResponse.data);

      // Отправляем запрос на создание аренды
      await axios.post('https://localhost:7290/Rent/CreateRent', {
        start_Date: startDate.toISOString(),
        end_Date: endDate.toISOString(),
        user_Id: userId,
        car_Id: carResponse.data.id,
        tarif: selectedTarif,
      });

      onClose();
    } catch (error) {
      console.error('Ошибка при бронировании', error.response.data);
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
          Минимальное напряжение:
          <input type="number" value={minimalVoltage} onChange={(e) => setMinimalVoltage(e.target.value)} required />
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
        <label>
          Выберите тариф:
          <select value={selectedTarif} onChange={handleTarifChange} required>
            <option value="">Выберите тариф</option>
            {tarifOptions.map(tarif => (
              <option key={tarif.id} value={tarif.name}>
                {tarif.name}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Забронировать</button>
      </form>
      <button className="close-button" onClick={onClose}>Закрыть</button>
    </div>
  );
};

export default BookingForm;
