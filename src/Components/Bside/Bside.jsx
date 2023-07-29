import React from "react";
import "./style.scss";
import ProfileImg from "./profile.jpg";

const Bside = () => {
  return (
    <div className="Bside">
      <div className="Bside_top">
        <div className="Bside_top_content">
          <div className="Bside_top_content_img">
            <img src={ProfileImg} alt="Profile Img" />
          </div>
          <div className="Bside_top_content_title">
            <h3>nozimbek_official</h3>
            <h3>Nozim</h3>
          </div>
          <div className="Bside_top_content_text">Переключиться</div>
        </div>
      </div>
      <div className="Bside_main">
        <div className="Bside_main_top">
          <h3>Рекомендации для вас</h3>
          <h3>Все</h3>
        </div>
        <div className="Bside_main_content">
          <div className="Bside_main_content_img">
            <img src={ProfileImg} alt="Profile Img" />
          </div>
          <div className="Bside_main_content_title">
            <h3>nozimbek_official</h3>
            <p>Подписан(-а) code.scientist</p>
          </div>
          <div className="Bside_main_content_text">Подписаться</div>
        </div>
        <div className="Bside_main_content">
          <div className="Bside_main_content_img">
            <img src={ProfileImg} alt="Profile Img" />
          </div>
          <div className="Bside_main_content_title">
            <h3>nozimbek_official</h3>
            <p>Подписан(-а) code.scientist</p>
          </div>
          <div className="Bside_main_content_text">Подписаться</div>
        </div>
        <div className="Bside_main_content">
          <div className="Bside_main_content_img">
            <img src={ProfileImg} alt="Profile Img" />
          </div>
          <div className="Bside_main_content_title">
            <h3>nozimbek_official</h3>
            <p>Подписан(-а) code.scientist</p>
          </div>
          <div className="Bside_main_content_text">Подписаться</div>
        </div>
        <div className="Bside_main_content">
          <div className="Bside_main_content_img">
            <img src={ProfileImg} alt="Profile Img" />
          </div>
          <div className="Bside_main_content_title">
            <h3>nozimbek_official</h3>
            <p>Подписан(-а) code.scientist</p>
          </div>
          <div className="Bside_main_content_text">Подписаться</div>
        </div>
        <div className="Bside_main_content">
          <div className="Bside_main_content_img">
            <img src={ProfileImg} alt="Profile Img" />
          </div>
          <div className="Bside_main_content_title">
            <h3>nozimbek_official</h3>
            <p>Подписан(-а) code.scientist</p>
          </div>
          <div className="Bside_main_content_text">Подписаться</div>
        </div>
      </div>
      <div className="Bside_footer">
        <ul>
          <li>
            <a href="/">Информация</a>
          </li>
          <li>
            <a href="/">Помощь</a>
          </li>
          <li>
            <a href="/">Пресса</a>
          </li>
          <li>
            <a href="/">API</a>
          </li>
          <li>
            <a href="/">Вакансии</a>
          </li>
          <li>
            <a href="/">Конфиденциальность</a>
          </li>
          <li>
            <a href="/">Условия</a>
          </li>
          <li>
            <a href="/">Места</a>
          </li>
          <li>
            <a href="/">Язык</a>
          </li>
          <li>
            <a href="/">Meta Verified</a>
          </li>
        </ul>
        <p>© 2023 INSTAGRAM FROM META</p>
      </div>
    </div>
  );
};

export default Bside;
