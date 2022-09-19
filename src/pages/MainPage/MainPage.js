import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";

const MainPage = () => {
  let navigate = useNavigate();
  const [repoTitle, setRepoTitle] = useState("");
  const [owner, setOwner] = useState("");

  const handleClick = () => {
    navigate({ pathname: `./${owner}/${repoTitle}` }, { replace: true });
  };

  return (
    <form className="main">
      <div className="main__content">
        <label htmlFor="owner">Onwer:</label>
        <input
          type="text"
          className="main__content__input"
          id="owner"
          onChange={(e) => setOwner(e.target.value)}
        ></input>
        <label htmlFor="repo">Repository:</label>
        <input
          type="text"
          className="main__ccontent__input"
          id="repo"
          onChange={(e) => setRepoTitle(e.target.value)}
        ></input>
      </div>
      <button type="button" className="content__submit" onClick={handleClick}>
        Commit Show
      </button>
    </form>
  );
};

export default MainPage;
