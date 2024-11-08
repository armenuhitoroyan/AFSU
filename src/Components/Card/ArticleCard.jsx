import React from "react";
import "../../style/ArticleCard.css";


const ArticleCard = ({
  image,
  commentBadge,
  dateAndUser,
  title,
  description,
}) => {
  return (
    <div className="article-card">
      <div className="image-container">
        <img src={image} alt="Article" className="article-image" />
        <div className="comment-badge">{commentBadge}</div>
      </div>
      <div className="content">
        <p className="date-author">{dateAndUser}</p>
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </div>
      <button className="read-more">
        <span>›</span>
      </button>
    </div>
  );
};

export default ArticleCard;
