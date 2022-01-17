import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://images.kinorium.com/movie/shot/318973/w1500_38025298.jpg' />
      <span> {props.message} </span>
      
      <div className={s.like}>
        <img src='https://cdn0.iconfinder.com/data/icons/seo-and-web-1-2/66/67-512.png' />
        
        <span>Like </span>
        <span> {props.likesCount} </span>
      </div>
    </div>
  )
}

export default Post;