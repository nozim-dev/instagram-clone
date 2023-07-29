import React from "react";
import "./style.scss";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import SpinnerComponent from "../../Components/Spinner/SpinnerComponent";
import ModalExplorer from "./ModalExplorer/ModalExplorer";
const Explorer = () => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  // const [modalData, setModalData] = useState({});

  useEffect(() => {
    axios.get("Data/ExplorerData.json").then((res) => {
      // console.log(res.data[4].url);
      // console.log(res.data[0]);
      setData(res.data);
      setisLoading(true);
    });
  }, []);

  const getArrayBoxClass = (index) => {
    // Conditionally return different class based on index or any other condition
    return index % 2 === 0
      ? "Explorer_container_row_right"
      : " Explorer_container_row_left";
  };

  function OpenModal() {
    document
      .querySelector(".ModalExplorer")
      .classList.add("ModalExplorer_active");
  }

  return (
    <div className="Explorer">
      {isLoading ? (
        <>
          <div className="Explorer_container">
            {data.map((item, id) => (
              <div
                className={`Explorer_container_row ${getArrayBoxClass(id)} `}
                key={id}
              >
                {item.map((item, id) => (
                  <div
                    className="Explorer_container_row_col"
                    key={id}
                    onClick={OpenModal}
                  >
                    <div className="Explorer_container_row_col_img">
                      {item.url.includes("mp4") ? (
                        <video src={item.url}></video>
                      ) : (
                        <img src={item.url} alt="" />
                      )}
                    </div>
                    <div className="Explorer_container_row_col_copy">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 22H18C19.1046 22 20 21.1046 20 20V8.91987C20 8.33602 19.7449 7.78132 19.3016 7.40136L13.5617 2.48149C13.1992 2.17078 12.7376 2 12.2602 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22Z"
                          stroke="black"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13 2.5V6C13 7.10457 13.8954 8 15 8H19.5"
                          stroke="black"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7 12H15"
                          stroke="black"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7 15H11.5"
                          stroke="black"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7 18H14"
                          stroke="black"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="Explorer_container_row_col_comment">
                      <span>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C13.473 22 14.874 21.6809 16.1356 21.1072L20.0848 21.8461C21.1322 22.0421 22.0442 21.114 21.83 20.0701L21.0485 16.2622C21.6591 14.9681 22 13.5225 22 12ZM7 10C5.89543 10 5 10.8954 5 12C5 13.1046 5.89543 14 7 14C8.10457 14 9 13.1046 9 12C9 10.8954 8.10457 10 7 10ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 10C15.8954 10 15 10.8954 15 12C15 13.1046 15.8954 14 17 14C18.1046 14 19 13.1046 19 12C19 10.8954 18.1046 10 17 10Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                      <span>{item.comments}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <ModalExplorer />
        </>
      ) : (
        <SpinnerComponent />
      )}
    </div>
  );
};

export default Explorer;
