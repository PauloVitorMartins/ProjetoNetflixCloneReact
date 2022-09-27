import React from "react";
import "./Header.css";

export default ({black}) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="https://fontmeme.com/netflix-font/">
          <img
            src="https://fontmeme.com/permalink/220927/bc05f5a4687b04f8d2447ad497fa3047.png"
            alt="netflix-font"
            border="0"
          ></img>
        </a>
      </div>
    </header>
  );
};
