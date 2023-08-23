import React from "react";
import "./css/Sidebar.css";
import logo from "./img/logo.png";
import Search from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-top">
          <img src={logo} alt="" />
          <p>Messages</p>
        </div>
        <div className="sidebar-search">
          <Search />
          <input placeholder="Search among Chats" />
        </div>
        <div className="sidebar-instructor">
          <p>Chat with Instructors</p>
          <div className="instructors">
            <div className="instructor">
              <Avatar />
              <p>Instructor 1</p>
            </div>
            <div className="instructor">
              <Avatar />
              <p>Instructor 2</p>
            </div>
            <div className="instructor">
              <Avatar />
              <p>Instructor 3</p>
            </div>
            <div className="instructor">
              <Avatar />
              <p>Instructor 4</p>
            </div>
            <div className="instructor">
              <Avatar />
              <p>Instructor 5</p>
            </div>
            <div className="instructor">
              <Avatar />
              <p>Instructor 6</p>
            </div>
          </div>
        </div>
        <div className="sidebar-groups">
          <p>Groups</p>
          <div className="groups">
            <div className="group">
              <p>#</p>
              <p>Batch Name</p>
            </div>
            <div className="group">
              <p>#</p>
              <p>Batch Name</p>
            </div>
            <div className="group">
              <p>#</p>
              <p>Batch Name</p>
            </div>
            <div className="group">
              <p>#</p>
              <p>Batch Name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
