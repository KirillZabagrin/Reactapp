import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Messages.module.css'

const DialogItems = (props) => {

    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Messages = (props) => {

    let dialogsData = [
        {id: 1, name: 'Толян'},
        {id: 2, name: 'Денис'},
        {id: 3, name: 'Камшот'},
        {id: 4, name: 'Биба'},
        {id: 5, name: 'Боба'},
    ]

    let messagesData = [
        {id: 1, message: 'Хватит писать говнокод'},
        {id: 2, message: 'Я Денис - любитель пис'},
        {id: 3, message: 'Привет, давай познакомимся'},
        {id: 4, message: 'хай'},
        {id: 5, message: 'ФЫВА'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItems name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItems name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItems name='Камшот' id='3' />
                <DialogItems name='Биба' id='4' />
                <DialogItems name='Боба' id='5' />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message='Привет, давай познакомимся' />
                <Message message='Хай' />
                <Message message='ФЫВА' />
            </div>
        </div>
    )
}

export default Messages;