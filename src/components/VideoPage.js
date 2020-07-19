import React from "react";
import videoList from "../utils/mock";

import SearchVideoFrame from "./SearchVideoFrame";

const VideoPage = (video) => {
  function thumbnail() {
    const id = video.video.link.split("=")[1];
    const thumbnail = `https://img.youtube.com/vi/${id}/0.jpg`;
    return thumbnail;
  }

  return (
    <main className="main video-page">
      <div className="video-page-vid">
        <div>
          <img src={thumbnail()} />
          <div></div>
        </div>

        <div>comments</div>
      </div>

      <nav>
        <ul>
          {videoList.map((vid) => {
            return (
              <li>
                <SearchVideoFrame video={vid} />
              </li>
            );
          })}
        </ul>
      </nav>
    </main>
  );
};

export default VideoPage;
