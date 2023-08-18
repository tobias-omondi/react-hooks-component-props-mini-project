import React from 'react';
import Article from './Article';

function ArticleList(props) {
  const articles = props.posts.map((post) => (
    <Article key={post.id} title={post.title} content={post.content} />
  ));
  return <main>{articles}</main>;
}

export default ArticleList;
