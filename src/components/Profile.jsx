import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return <div className={s.content}>
    <div>
      <img src='https://images.unsplash.com/photo-1568890724546-a0ad828fd94d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'></img>
    </div>
    <div>
      ava+description
    </div>
    <div>
      My posts
      <div>
        New post
      </div>
      <div className={s.posts}>
        <div className={s.item}>
          Post 1
        </div>
        <div className={s.item}>
          Post 2
        </div>
      </div>
    </div>
  </div>
}

export default Profile;