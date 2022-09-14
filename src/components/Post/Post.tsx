import React, { useState } from 'react';

import './Post.scss';

type Props = {
  post: Post,
};

export const Post: React.FC<Props> = ({ post }) => {
  const [selected, setSelected] = useState<boolean>(false);

  const toggle = () => {
    if (selected) {
      setSelected(!selected);
    }

    setSelected(!selected);
  };

  return (
    <>
      <button
        type="button"
        className="post__title"
        onClick={toggle}
      >
        {post.title}
      </button>

      <div className={selected ? 'post__body' : 'post__body--hide'}>
        {post.body}
      </div>
    </>
  );
};
