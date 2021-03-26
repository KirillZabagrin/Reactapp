import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://sun9-41.userapi.com/impg/9DIdx4ot_2rmo67pHbgng93C2jNBV14waam9sQ/pNgXq9qXjrY.jpg?size=1224x1224&quality=96&sign=d0aed42419e19ab4374fba870255ce03&type=album' />
      { props.message}
      <button>{props.likesCount} 👍 </button>
    </div>
  )
}

export default Post;