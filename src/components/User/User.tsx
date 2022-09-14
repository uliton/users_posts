import React from 'react';

import './User.scss';

type Props = {
  user: User,
  selectedUser: number,
  setSelestedUser: (id: number) => void,
  postsShownStatus: boolean,
  setPostsShownStatus: (postsShownStatus: boolean) => void,
};

export const User: React.FC<Props> = ({
  user,
  selectedUser,
  setSelestedUser,
  postsShownStatus,
  setPostsShownStatus,
}) => {
  const handler = () => {
    if (!postsShownStatus) {
      setSelestedUser(user.id);
      setPostsShownStatus(!postsShownStatus);
    }

    if (postsShownStatus && selectedUser === user.id) {
      setPostsShownStatus(!postsShownStatus);
    }

    setSelestedUser(user.id);
  };

  return (
    <div className="user__container">
      <div className="user__info">
        <span className="name">
          {user.name}
        </span>
        <span>
          {user.email}
        </span>
        <span>
          {user.phone}
        </span>
      </div>

      <button
        type="button"
        className="user__button"
        onClick={handler}
      >
        {postsShownStatus && selectedUser === user.id ? 'Hide posts' : 'Show posts'}
      </button>
    </div>
  );
};
