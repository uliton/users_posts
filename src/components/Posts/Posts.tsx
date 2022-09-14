import React from 'react';
import { Post } from '../Post/Post';

import './Posts.scss';

type Props = {
  filteredPosts: Post[],
};

export const Posts: React.FC<Props> = ({ filteredPosts }) => {
  return (
    <div className="posts__container">
      <ul className="posts__list">
        {filteredPosts.map((post) => (
          <li key={post.id} className="posts__item">
            <Post post={post} />
          </li>
        ))}

      </ul>
    </div>
  );
};
