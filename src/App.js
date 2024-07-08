import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <section className="header_wrap">
        <header className="header">
          <a href="#">
            <img className="logo" src="\img\logo.png" alt="Logo" />
          </a>
          <nav>
            <ul className="menu">
              <li><a href="components\header.vue">Услуги</a></li>
              <li><a href="#">Схема проезда</a></li>
              <li><a href="#">Отзывы</a></li>
              <li><a href="#">Контакты</a></li>
            </ul>
          </nav>
          <div className="contact-info">
            <span>+7 900 000 00 00</span>
            <span>Магнитогорск, Ленина 1</span>
          </div>
          <button className="reserved">Забронировать</button>
        </header>
      </section>
      <div className="car_photo">
        <img className="photo1" src="\img\car_photo.jpg" alt="Car" />
      </div>
      <div className="wonder">
        <h1>Wonder Parking - для тех, кто ценит свои вложения: безопасное и удобное хранение вашего автомобиля</h1>
      </div>

      <div className="uslugi">
        <h1>УСЛУГИ</h1>
      </div>
      <div className="uslugi_photo">
        <div className="usliga1">
          <img className="photo2" src="\img\uslugi1.jpg" alt="Услуга 1" />
          <p style={{ marginLeft: '225px', marginTop: '50px' }}>Парковка на короткий период</p>
          <p style={{ marginLeft: '225px', marginTop: '25px' }}><b>От 500 руб/сутки</b></p>
        </div>
        <div className="usluga2">
          <img className="photo3" src="\img\uslugi2.jpg" alt="Услуга 2" />
          <p style={{ marginTop: '50px' }}>Парковка на длинный период</p>
          <p style={{ marginTop: '25px' }}><b>От 200 руб/сутки</b></p>
        </div>
        <div className="usluga3">
          <img className="photo4" src="\img\uslugi3.jpg" alt="Услуга 3" />
          <p style={{ marginTop: '50px' }}>Парковка для электрокаров</p>
          <p style={{ marginTop: '25px' }}><b>От 600 руб/сутки</b></p>
        </div>
      </div>
      <button className="reserved2">Забронировать парковочное место</button>

      <div className="how_go">
        <div className="shema">
          <h1>СХЕМА ПРОЕЗДА</h1>
        </div>
        <div className="map">
          <center>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae8410418151905203629ffd0a420e7d64b757538a9049b3b6a6621978a49a6d6&amp;source=constructor" width="900" height="630" frameborder="0" title="Map"></iframe>
          </center>
        </div>
        <div className="we">
          <center>
            <h2>Мы на картах</h2>
            <img className="maps_logo1" src="\img\maps.png" alt="Maps Logo 1" />
            <img className="maps_logo1" src="\img\maps2.png" alt="Maps Logo 2" />
          </center>
        </div>
      </div>

      <div className="feedback">
        <h1>ОТЗЫВЫ</h1>

        <div className="comment_box">
          <div className="user_info">
            <img className="user_photo" src="\img\user.png" alt="User" />
            <h2 className="user_name">user1</h2>
            <h3 className="comment_time">Вчера 17:02</h3>
          </div>
          <p className="comment_text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sint cumque nam cum distinctio maiores amet incidunt commodi perspiciatis natus similique, est, quibusdam ipsam repellendus quod dolores ad, aspernatur atque.</p>
        </div>

        <div className="comment_box">
          <div className="user_info">
            <img className="user_photo" src="\img\user.png" alt="User" />
            <h2 className="user_name">user1</h2>
            <h3 className="comment_time">Вчера 17:02</h3>
          </div>
          <p className="comment_text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sint cumque nam cum distinctio maiores amet incidunt commodi perspiciatis natus similique, est, quibusdam ipsam repellendus quod dolores ad, aspernatur atque.</p>
        </div>

        <div className="comment_box">
          <div className="user_info">
            <img className="user_photo" src="\img\user.png" alt="User" />
            <h2 className="user_name">user1</h2>
            <h3 className="comment_time">Вчера 17:02</h3>
          </div>
          <p className="comment_text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sint cumque nam cum distinctio maiores amet incidunt commodi perspiciatis natus similique, est, quibusdam ipsam repellendus quod dolores ad, aspernatur atque.</p>
        </div>

        <button className="reserved2">Забронировать парковочное место</button>
      </div>
    </>
  );
}

export default App;
