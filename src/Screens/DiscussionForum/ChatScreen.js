import React from "react";
import "./css/ChatScreen.css";
import ExpandMore from "@material-ui/icons/ExpandMoreRounded";
import Search from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import AddIcon from "@material-ui/icons/Add";

function ChatScreen({ data }) {
  console.log(data);
  const Message = () => {
    return (
      <div className="chat-message">
        <div className="message-body">
          <div className="messages">
            <div className="message">
              <div className="message-timestamp">
                <span></span>
                <p>timeStamp</p>
                <span></span>
              </div>
              <div className="message-content">
                <p>E</p>

                <div className="message-info">
                  <p>Emma Datson</p>
                  <p>
                    Empowering young minds to lead the world Live Coding,
                    Robotics and Artificial Intelligence Classes for grades 6th
                    to 12th by IITians
                  </p>
                </div>
                <p className="instructor">Instructor</p>
                <p>time</p>
              </div>
            </div>
          </div>
          <div className="chat-foot">
            <div className="chat-foot-container">
              <div className="chat-add-file">
                <AddIcon />
              </div>
              <input placeholder="Enter your message here" />
              <span>+Tag a person</span>
              <EmojiEmotionsOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const SidebarOptions = () => {
    return <div>Sidebar Options</div>;
  };
  return (
    <div className="chat-screen">
      <div className="chat-screen-container">
        <div className="chat-screen-header">
          <div className="chat-screen-header-left">
            <p>#</p>
            <p>Batch Name</p>
          </div>
          <div className="chat-screen-header-right">
            <div className="chat-screen-search">
              <Search />
              <input placeholder="Find what you need" />
            </div>
            <div className="chat-screen-student">
              <Avatar />
              <p>Student Name</p>
              <ExpandMore />
            </div>
          </div>
        </div>
        <div className="chat-screen-body">
          <div className="chat-screen-message">
            <Message />
          </div>
          <div className="chat-screen-sidebar">
            <SidebarOptions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatScreen;
