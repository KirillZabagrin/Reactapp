import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {

  let postsData = [
      {id: 1, message: 'Привет, мир!', likesCount: 12},
      {id: 2, message: 'Это мой первый пост!', likesCount: 8},
      {id: 3, message: 'Бан + осуждение', likesCount: 999},
  ]

  return (
    <div className={s.myposts}>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>

      </div>
      <div>
        <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
        <Post message={postsData[1].message} likesCount={postsData[1].likesCount} />
        <Post message={postsData[2].message} likesCount={postsData[2].likesCount} />
     
      </div>
    </div>

  )
}

export default MyPosts;