import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <img className={s.MainImage}src='https://digital.hbs.edu/platform-rctom/wp-content/uploads/sites/4/2016/11/coal_pile_NPS-1100x200.jpg' />
      <div className={s.mypage}>
        <img className={s.avatar} src='https://sun9-41.userapi.com/impg/9DIdx4ot_2rmo67pHbgng93C2jNBV14waam9sQ/pNgXq9qXjrY.jpg?size=1224x1224&quality=96&sign=d0aed42419e19ab4374fba870255ce03&type=album' />
        <div className={s.name}>
          Надя Щеголева
        <div className={s.deskription}>
            Люблю бан и осуждение, не люблю собак и болезни из попкорна.
        </div>
        </div>
    </div>
    </div>
    )
  }

export default ProfileInfo