import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

const Profile = () => {
    return <div>
    <div>
      <img src='https://images.unsplash.com/photo-1568890724546-a0ad828fd94d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'></img>
    </div>
    <div>
      ava+description
    </div>
    <MyPosts />
  </div>
}

export default Profile;