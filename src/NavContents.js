import { Avatar } from '@material-ui/core';
import React from 'react';
import "./NavContents.css";
import {useSelector} from 'react-redux'
import { selectUser } from './features/userSlice';

function NavContents({Icon,title, avatar, onClick}){

    const user = useSelector(selectUser);

    return ( 
    <div onClick={onClick} className='navContents_container'>
        {Icon && <Icon className='navContents_icon'/>}
        {avatar && <Avatar className='headerOption_icon'>
            {user?.email[0]}
        </Avatar>}
        <h3 className='headerOption_title'>{title}</h3>
    </div>)
}

export default NavContents;