import React from "react";

const Article = ({ title, date, preview }) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date ? formatDate(date) : "January 1, 1970"}</small>
      <p>{preview}</p>
    </article>
  );
};

export default Article;
