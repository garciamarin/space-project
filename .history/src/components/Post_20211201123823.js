import React from "react";
import { marked } from "marked";
import "./post.css";

const Post = ({ article }) => {
  console.log(article);
  const { title, visit, image, link, description } = article.fields;
  const postDescription = marked(description);
  return (
    <div className="container">
      <h2>{title}</h2>
      <p>{visit}</p>
      {image && <img src={image.fields.file.url} alt={title} title={title} />}
      <a href={link} />
      <section dangerouslySetInnerHTML={{ __html: postDescription }} />
    </div>
  );
};
export default Post;
