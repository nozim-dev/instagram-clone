import React, { useEffect, useState } from "react";
import "./style.scss";
import Bside from "../Bside/Bside";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { Link } from "react-router-dom";
import SpinnerComponent from "../Spinner/SpinnerComponent";
const Main = () => {
  const [data, setData] = useState([]);
  const [Postdata, setPostData] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 2,
  };

  useEffect(() => {
    axios
      .get("./Data/StoryData.json")
      .then(function (response) {
        // handle success
        // console.log(response.data);
        setData(response.data);
        setisLoading(true);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const settings2 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    axios
      .get("./Data/PostData.json")
      .then(function (response) {
        // handle success
        // console.log(response.data);
        setPostData(response.data);
        setisLoading(true);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <div className="Main">
      {isLoading ? (
        <>
          <div className="Main_content">
            <div className="Main_content_top">
              <Slider {...settings}>
                {data.map((item, id) => (
                  <Link to="/" className="Main_content_top_item" key={id}>
                    <div
                      className={`Main_content_top_item_img ${
                        item.isSeen ? "Main_content_img_active" : ""
                      }`}
                    >
                      <img src={item.image} alt={item.username} />
                    </div>
                    <div className="Main_content_top_item_title">
                      {item.username}
                    </div>
                  </Link>
                ))}
              </Slider>
            </div>
            <div className="Main_content_main">
              {Postdata.map((item, id) => (
                <div className="Main_content_main_item_top" key={id}>
                  <div className="Main_content_main_item">
                    <div className="Main_content_main_item_top_user">
                      <div className="Main_content_main_item_top_user_img">
                        <img src={item.userImg} alt={item.userName} />
                      </div>
                      <div className="Main_content_main_item_top_user_title">
                        <div className="Main_content_main_item_top_user_title_text">
                          {item.userName}
                        </div>
                        <div className="Main_content_main_item_top_user_title_text2">
                          {item.TimeisPosted}
                        </div>
                      </div>
                    </div>
                    <div className="Main_content_main_item_top_options">
                      <svg
                        ariaLabel="Дополнительно"
                        class="_ab6-"
                        color="rgb(245, 245, 245)"
                        fill="rgb(245, 245, 245)"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <circle cx="12" cy="12" r="1.5"></circle>
                        <circle cx="6" cy="12" r="1.5"></circle>
                        <circle cx="18" cy="12" r="1.5"></circle>
                      </svg>
                    </div>
                  </div>
                  <div className="Main_content_main_item_main">
                    <Slider {...settings2}>
                      {item.images.map((image, id) => (
                        <div
                          className="Main_content_main_item_main_item"
                          key={id}
                        >
                          <div className="Main_content_main_item_main_item_img">
                            <img src={image.url} alt={image.alt} />
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                  <div className="Main_content_main_item_options">
                    <div className="Main_content_main_item_options_left">
                      <span>
                        <svg
                          aria-label="Нравится"
                          class="x1lliihq x1n2onr6"
                          color="rgb(245, 245, 245)"
                          fill="rgb(245, 245, 245)"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <title>Нравится</title>
                          <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                        </svg>
                      </span>
                      <span>
                        <svg
                          aria-label="Комментировать"
                          class="x1lliihq x1n2onr6"
                          color="rgb(245, 245, 245)"
                          fill="rgb(245, 245, 245)"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <title>Комментировать</title>
                          <path
                            d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                            fill="none"
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></path>
                        </svg>
                      </span>
                      <span>
                        <svg
                          aria-label="Поделиться публикацией"
                          class="x1lliihq x1n2onr6"
                          color="rgb(245, 245, 245)"
                          fill="rgb(245, 245, 245)"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <title>Поделиться публикацией</title>
                          <line
                            fill="none"
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                            x1="22"
                            x2="9.218"
                            y1="3"
                            y2="10.083"
                          ></line>
                          <polygon
                            fill="none"
                            points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></polygon>
                        </svg>
                      </span>
                    </div>
                    <div className="Main_content_main_item_options_right">
                      <span>
                        <svg
                          aria-label="Сохранить"
                          class="x1lliihq x1n2onr6"
                          color="rgb(245, 245, 245)"
                          fill="rgb(245, 245, 245)"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <title>Сохранить</title>
                          <polygon
                            fill="none"
                            points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></polygon>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="Main_content_main_item_likefriends">
                    Нравится gurvinder_pb12 и другим
                  </div>
                  <div className="Main_content_main_item_text">
                    <h5>{item.userName}</h5>
                    <p>{item.TextArea}</p>
                  </div>
                  <div className="Main_content_main_item_input">
                    <form action="">
                      <textarea
                        rows="1"
                        type="text"
                        placeholder="Добавьте комментарий..."
                      />
                      <span>
                        <svg
                          ariaLabel="Смайлик"
                          class="x1lliihq x1n2onr6"
                          color="rgb(168, 168, 168)"
                          fill="rgb(168, 168, 168)"
                          height="13"
                          role="img"
                          viewBox="0 0 24 24"
                          width="13"
                        >
                          <title>Смайлик</title>
                          <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
                        </svg>
                      </span>
                    </form>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Bside />
        </>
      ) : (
        <SpinnerComponent />
      )}
    </div>
  );
};

export default Main;
