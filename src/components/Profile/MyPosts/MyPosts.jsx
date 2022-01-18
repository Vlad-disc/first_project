import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={s.item}>
      My posts
      <div>
        <textarea></textarea>
        <button>Add class</button>
      </div>

      <div className={s.posts}>
        <Post message="Hi, how are you?" likesCount="10" />
        <Post message="Hi, I'm fine" likesCount="21" />
      </div>
    </div>
  )
}

export default MyPosts;