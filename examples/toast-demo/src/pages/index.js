/** @jsx h */
import { h } from 'preact';

export default (props) => {
  const posts = props.posts;

  return (
    <main>
      <h1>Hello World</h1>
      <p>Lorem ipsum yah!</p>
      <ul>
        {posts.map((post) => {
          return (
            <li>
              <a href={`/${post.slug}`}>{post.title}</a>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
