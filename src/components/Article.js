import React from 'react';

function Article(props) {
  const date = props.date || "January 1, 1970";
  const preview = props.preview || "";
  const wordsPerMinute = 200;
  const readingTime = Math.ceil(preview.split(" ").length / wordsPerMinute);

  const renderReadingTime = () => {
    if (readingTime < 30) {
      const coffeeCups = Math.ceil(readingTime / 5);
      return "☕️".repeat(coffeeCups) + ` ${readingTime} min read`;
    } else {
      const bentoBoxes = Math.ceil(readingTime / 10);
      return "🍱".repeat(bentoBoxes) + ` ${readingTime} min read`;
    }
  };

  return (
    <article>
      <h3>{props.title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{renderReadingTime()}</p>
    </article>
  );
}

export default Article;
