import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import VideoItem from "../VideoItem";
const Reels = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("./Data/ReelsData.json")
      .then((res) => {
        // console.log(res);
        setData(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div className="Reels">
      <div className="Reels_row">
        {data.map((item) => (
          <div className="Reels_row_cols" key={item.id}>
            <div className="Reels_row_col">
              <div className="Reels_row_col_content">
                <div className="Reels_row_col_content_video">
                  <VideoItem key={item.id} videoSrc={item.video} />
                </div>
                <img
                  className="Reels_row_col_content_img"
                  src={item.shadowVidoe}
                  alt="shadow"
                />
                <div className="Reels_row_col_content_title">
                  <div className="Reels_row_col_content_title_top">
                    <div className="Reels_row_col_content_title_img">
                      <img src={item.userImg} alt="user" />
                    </div>
                    <div className="Reels_row_col_content_title_userName">
                      {item.userName}
                    </div>
                    <div className="Reels_row_col_content_title_btn">
                      Подписаться
                    </div>
                  </div>
                  <div className="Reels_row_col_content_title_comment">
                    {item.TextArea}
                  </div>
                  <div className="Reels_row_col_content_title_music">
                    <span>
                      <svg
                        aria-label="Изображение аудидорожки"
                        class="x1lliihq x1n2onr6"
                        color="rgb(255, 255, 255)"
                        fill="rgb(255, 255, 255)"
                        height="12"
                        role="img"
                        viewBox="0 0 24 24"
                        width="12"
                      >
                        <title>Изображение аудидорожки</title>
                        <path d="M21.002 16.972V2.044a.999.999 0 0 0-.36-.769 1.012 1.012 0 0 0-.823-.214L6.816 3.479A1 1 0 0 0 6 4.462v10.864A3.75 3.75 0 1 0 9 19V9.56l9.003-1.675v5.442A3.75 3.75 0 1 0 21.005 17c0-.01-.003-.02-.003-.029Z"></path>
                      </svg>
                    </span>
                    <p>{item.musicName}</p>
                    <span>
                      <svg
                        aria-label="Отмеченные пользователи"
                        class="x1lliihq x1n2onr6"
                        color="rgb(255, 255, 255)"
                        fill="rgb(255, 255, 255)"
                        height="12"
                        role="img"
                        viewBox="0 0 24 24"
                        width="12"
                      >
                        <title>Отмеченные пользователи</title>
                        <path d="M21.334 23H2.666a1 1 0 0 1-1-1v-1.354a6.279 6.279 0 0 1 6.272-6.272h8.124a6.279 6.279 0 0 1 6.271 6.271V22a1 1 0 0 1-1 1ZM12 13.269a6 6 0 1 1 6-6 6.007 6.007 0 0 1-6 6Z"></path>
                      </svg>
                    </span>
                    <p>{item.musicAuthor}</p>
                  </div>
                </div>
              </div>
              <div className="Reels_row_col_options">
                <div className="Reels_row_col_options_item">
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
                  Нравится
                </div>
                <div className="Reels_row_col_options_item">
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
                  {item.CountOfComment}
                </div>
                <div className="Reels_row_col_options_item">
                  <span>
                    <svg
                      aria-label="Отправить в сообщении"
                      class="x1lliihq x1n2onr6"
                      color="rgb(245, 245, 245)"
                      fill="rgb(245, 245, 245)"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <title>Отправить в сообщении</title>
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
                <div className="Reels_row_col_options_item">
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
                <div className="Reels_row_col_options_item">
                  <span>
                    <svg
                      aria-label="Ещё"
                      class="x1lliihq x1n2onr6"
                      color="rgb(245, 245, 245)"
                      fill="rgb(245, 245, 245)"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <title>Ещё</title>
                      <circle cx="12" cy="12" r="1.5"></circle>
                      <circle cx="6" cy="12" r="1.5"></circle>
                      <circle cx="18" cy="12" r="1.5"></circle>
                    </svg>
                  </span>
                </div>
                <div className="Reels_row_col_options_item">
                  <img src={item.musicImg} alt="music image" />
                </div>
              </div>
            </div>
            <div className="Reels_row_col_empty"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reels;
