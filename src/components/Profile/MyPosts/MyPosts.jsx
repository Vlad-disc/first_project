import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import Profile from '../Profile';

const MyPosts = () => {

  let posts = [
    { id: 1, message: "Hi, how are you", likesCount: 10 },
    { id: 2, message: "Hi, I'm fine", likesCount: 21 },
    { id: 3, message: "Yo, What's up bro", likesCount: 15 },
    { id: 4, message: "YOOOOO, hommie", likesCount: 24 }
  ]

  let postsElements = posts.map
    (p => <Post message={p.message} likesCount={p.likesCount} />)
  ;
  
  return (
    <div className={s.item}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add class</button>
        </div>
      </div>

      <div className={s.posts}>

        { postsElements }

      </div>
    </div>
  )
}

export default MyPosts;