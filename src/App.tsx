import React, { useEffect, useState } from 'react';
import { User } from './components/User/User';
import { Posts } from './components/Posts/Posts';
import { getPosts, getUsers } from './api';

import './App.scss';
import previous from './images/Vector1.png';
import next from './images/Vector2.png';

export const App: React.FC = () => {
  const [users, setUsers] = useState<User[] | []>([]);
  const [selectedUser, setSelestedUser] = useState<number>(0);
  const [posts, setPosts] = useState<Post[] | []>([]);
  const [query, setQuery] = useState<string>('');
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(4);
  const [postsShownStatus, setPostsShownStatus] = useState(false);

  useEffect(() => {
    getUsers()
      .then(result => {
        setUsers([...result]);
      });
  }, []);

  useEffect(() => {
    getPosts()
      .then(result => {
        setPosts([...result]);
      });
  }, []);

  const filteredPosts: Post[] = posts.filter(post => post.userId === selectedUser);

  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(query.toLowerCase()));

  const handleSort = () => {
    const sortedUsers = [...users].sort(
      (firstPerson, secondPerson) => firstPerson.name.localeCompare(secondPerson.name),
    );

    setUsers(sortedUsers);
  };

  const usersForShow = filteredUsers.slice(start, end);

  const previousUsers = () => {
    if (start > 0) {
      setStart(start - 4);
      setEnd(end - 4);
    }
  };

  const nextUsers = () => {
    if (end < users.length) {
      setStart(start + 4);
      setEnd(end + 4);
    }
  };

  return (
    <div className="app">
      <nav className="app__nav nav">
        <div className="nav__name">
          YourItSoft
        </div>
        <div className="nav__search">
          <button
            type="button"
            className="nav__search--button"
            onClick={handleSort}
          >
            Sort by Name
          </button>
          <input
            type="text"
            className="nav__search--input"
            placeholder="Search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />
        </div>
      </nav>

      <div className="app__users users">
        <div className="users__container">
          {usersForShow.map((user: User) => (
            <React.Fragment key={user.id}>
              <User
                user={user}
                selectedUser={selectedUser}
                setSelestedUser={setSelestedUser}
                postsShownStatus={postsShownStatus}
                setPostsShownStatus={setPostsShownStatus}
              />
            </React.Fragment>
          ))}
        </div>

        {postsShownStatus && (
          <Posts filteredPosts={filteredPosts} />
        )}
      </div>

      <div className="app__buttons button">
        <div
          className="button__previous"
          onKeyPress={previousUsers}
          role="button"
          tabIndex={0}
          onClick={previousUsers}
        >
          <img
            src={previous}
            alt="previous"
            className="button__previous--image"
          />
          <span className="button__previous--text">
            Previous
          </span>
        </div>

        <div
          className="button__next"
          onKeyPress={nextUsers}
          role="button"
          tabIndex={0}
          onClick={nextUsers}
        >
          <span className="button__next--text">
            Next
          </span>
          <img
            src={next}
            alt="next"
            className="button__next--image"
          />
        </div>
      </div>

    </div>
  );
};
