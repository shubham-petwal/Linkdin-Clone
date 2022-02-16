import React from "react";
import { Avatar } from '@material-ui/core';
import "./Sidebar.css";

function Sidebar(){

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>

        </div>
    )

    return(
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg" alt="img"/>
                <Avatar className="sidebar_avatar"/>
                <h2>Shubham Petwal</h2>
                <h4>shubhampetwal250@gmail.com</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_stateNumber">2,300</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on your post</p>
                    <p className="sidebar_stateNumber">20K</p>
                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem("reactJS")}
                {recentItem("programming")}
                {recentItem("software")}
                {recentItem("design")}
                {recentItem("developer")}

            </div>
        </div>
    );
}
export default Sidebar;