import React from "react";

const SearchVideoFrame = ({ video }) => {
  function thumbnail() {
    const id = video.link.split("=")[1];
    const thumbnail = `https://img.youtube.com/vi/${id}/0.jpg`;
    return thumbnail;
  }

  return (
    <div className="video-frame">
      <a href={video.link}>
        <img src={thumbnail()} alt={`thumbnail for ${video.name}`} />
      </a>
      <span>
        <h4>{video.name}</h4>
        <span>
          <span>{video.views} Views </span>
          <span></span>
        </span>
      </span>
    </div>
  );
};

export default SearchVideoFrame;
