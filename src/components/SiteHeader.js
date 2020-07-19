import React from "react";

const SiteHeader = ({ sertchInput, handler }) => {
  return (
    <header className="site-header">
      <img src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Youtube-512.png" />
      <span>Youtube Search</span>

      <form onSubmit={(e) => e.preventDefault()}>
        <input type="search" value={sertchInput} onChange={(e) => handler(e)} />
      </form>

      <div>userProfile</div>
    </header>
  );
};

export default SiteHeader;
