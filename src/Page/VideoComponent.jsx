import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import VideoItem from "./VideoItem";

const VideoComponent = () => {
  const [videosFromJson, setvideosFromJson] = useState([]);

  useEffect(() => {
    axios
      .get("./Data/ReelsData.json")
      .then((res) => {
        console.log(res);
        setvideosFromJson(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div>
      {videosFromJson.map((item, index) => (
        <VideoItem key={index} videoSrc={item.video} />
      ))}
    </div>
  );
};

export default VideoComponent;
