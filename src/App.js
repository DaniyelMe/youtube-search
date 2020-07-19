import React, { useState } from "react";

import videoList from "./utils/mock";

import SiteHeader from "./components/SiteHeader";
import SearchVideoFrame from "./components/SearchVideoFrame";
import VideoPage from "./components/VideoPage";

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState("");

  function handler(e) {
    e.preventDefault();
    setSearchInput(e.target.value);
  }

  function filter(result) {
    return videoList.filter((vid) => vid.name == searchInput);
  }

  return (
    <>
      <SiteHeader sertchInput={searchInput} handler={handler} />

      {searchInput.length > 1 ? (
        <div className="filter-result">
          {videoList.map((vid) => {
            return <SearchVideoFrame video={vid} key={vid.link} />;
          })}
        </div>
      ) : (
        <VideoPage video={videoList[0]} />
      )}
    </>
  );
};

export default App;
