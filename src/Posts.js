import React from "react";
import InputItems from "./InputItems";
import "./Posts.css";
import { Avatar } from "@material-ui/core";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";


function Posts({name, description, message}){
    return(
        <div className="posts_container">
            <div className="posts_header">
                <Avatar />
                <div className="posts_info">
                    <p className="posts_name">{name}</p>
                    <p className="posts_des">{description}</p>
                </div>
            </div>
            <div className="posts_body">
                <p>{message}</p>
            </div>





               <div className="posts_options">
                <InputItems Icon={ThumbUpOutlinedIcon} title="Like"/>
                <InputItems Icon={MessageOutlinedIcon} title="Like"/>
                <InputItems Icon={ShareOutlinedIcon} title="Like"/>
                <InputItems Icon={SendOutlinedIcon} title="Like"/>
            </div>
        </div>
    );
}
export default Posts;