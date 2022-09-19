import React from "react";
import moment from "moment-timezone";
import "./style.css";

const RepositoryItem = ({
  commit: {
    author: { date, name },
    message,
  },
  url,
}) => {
  const formattedDate = moment(date);
  return (
    <div className="repository__item">
      <b className="item__info">{formattedDate.format("lll")}</b>
      <a href={url} className="item__content">
        {message}
      </a>
      <p className="item__info">{name}</p>
    </div>
  );
};

export default RepositoryItem;
