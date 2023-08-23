import React, { useEffect, useState, useRef } from "react";
import "./css/DiscussionForum.css";
import ExpandLessIcon from "@material-ui/icons/ExpandLessRounded";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CloseIcon from "@material-ui/icons/Close";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import Modal from "react-modal";
import SearchIcon from "@material-ui/icons/Search";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import { IconButton } from "@material-ui/core";
import MoodIcon from "@material-ui/icons/Mood";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import axios from "axios";
import { io } from "socket.io-client";

import { instructorInfo, instructorSchedule } from "../../Actions/Instructor";
import { useDispatch, useSelector } from "react-redux";

function DiscussionForum() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [batchName, setBatchName] = useState("");
  const [batchId, setBatchId] = useState("");
  const [message, setMessage] = useState("");
  const [messageFile, setMessageFile] = useState(null);
  const [forumEnabled, setForumEnabled] = useState(null);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const socket = useRef();
  // useEffect(() => {
  //   socket.current = io("http://localhost:3000");
  //   socket.current.on("connect", () => {
  //     console.log(`You connected with id: ${socket.id}`);
  //   });
  //   socket.current.on("getMessage", (data) => {
  //     setArrivalMessage({
  //       sender: data.senderId,
  //       text: data.text,
  //       createdAt: Date.now(),
  //     });
  //   });
  // }, []);

  // useEffect(() => {
  //   arrivalMessage &&
  //     currentChat?.members.includes(arrivalMessage.sender) &&
  //     setMessage((prev) => [...prev], arrivalMessage);
  // }, [arrivalMessage, currentChat]);

  // useEffect(() => {
  //   socket.current.emit("addUser", userInfo.userId);
  //   // socket.current.on('getUser', (users) => {
  //   //   setOnlineUsers(user)
  //   // })
  // }, []);

  const { userInfo } = useSelector((state) => state.userLogin);
  const { instructorSchedule: schedule } = useSelector(
    (state) => state.instructorSchedule
  );

  console.log(schedule);
  // console.log(userInfo);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(instructorSchedule());
  }, []);

  useEffect(() => {
    if (userInfo) {
      dispatch(instructorInfo());
    }
    // console.log(userInfo);
  }, [userInfo, instructorInfo]);

  useEffect(() => {
    if (batchId && forumEnabled) {
      const userInfos = localStorage.getItem("userInfo");
      const token = userInfos ? JSON.parse(userInfos).token : "";
      const config = {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      };
      axios
        .get(`/api/forum/${batchId}`, config)
        .then((res) => setMessages(res.data))
        .catch((err) => console.log(err));
    }
  }, [batchId]);
  console.log(messages);

  const handleUpload = () => {
    document.getElementById("file-upload").click();
  };

  const handleMessageFile = (e) => {
    if (e.target.files[0]) {
      setMessageFile(e.target.files[0]);
      alert("File selected");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInfos = localStorage.getItem("userInfo");
    const token = userInfos ? JSON.parse(userInfos).token : "";
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    };

    if (messageFile === null) {
      const body = {
        userId: userInfo.userId,
        role: userInfo.role,
        message,
      };
      await axios
        .post(`/api/forum/${batchId}`, body, config)
        .then((res) => {
          console.log(res.data);
          console.log("message added successfully");
          setMessage("");
        })
        .catch((e) => console.log(e));
    } else {
      //messagefile
      const formData = new FormData();
      formData.append("files", messageFile);
      const fileID = await axios
        .post("/api/file", formData, config)
        .then((res) => res.data.fileId)
        .catch((err) => console.log(err));

      const body = {
        userId: userInfo.userId,
        role: userInfo.role,
        messageFile: fileID,
      };

      axios
        .post(`/api/forum/${batchId}`, body, config)
        .then((res) => {
          console.log(res);
          console.log("file sent successfully");
          setMessageFile(null);
        })
        .catch((e) =>
          console.log(e, {
            message: "File not sent",
          })
        );
    }
  };

  console.log(schedule);

  const batch = [];
  let bat = schedule?.classes?.filter((clas) => {
    batch.push(clas);
  });

  // console.log(batch);
  const handleModalOpen = () => {
    setModalOpen((show) => !show);
  };

  const handleChatOpen = (data) => {
    console.log(data);
    if (data.discussion && data?.discussion[0]?.isActive) {
      setChatOpen(true);
      setBatchName(data?.batch);
      setBatchId(data?._id);
      setForumEnabled(data?.discussion[0]?.isActive);
    } else {
      alert("Forum disabled!!!");
    }
  };
  const customStyles = {
    overlay: {
      background: "none",
      padding: "0",
    },
    content: {
      backgroundColor: "#020120",
      top: "auto",
      left: "auto",
      bottom: "37px",
      right: "3px",
      width: 250,
      height: 450,
      color: "#ddd",
      padding: "0px",
      border: 0,
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
  };

  const Message = ({ message }) => {
    const scrollRef = useRef(null);

    const formatDate = (d) => {
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ];
      var stamp = new Date(d);
      console.log(stamp.getDate(), stamp.getMonth());
      return stamp.getDate() + " " + months[stamp.getMonth()];
    };

    const formatTime = (d) => {
      var time = new Date(d);
      return time.getHours() + ":" + time.getMinutes();
    };

    return (
      <div ref={scrollRef} className="message-container">
        <div className="message-container-time">
          <p>{formatDate(message?.timestamp)}</p>
        </div>

        <div className="message-contents">
          <div
            className={`message-top ${
              message?.userId === userInfo.userId && "you"
            }`}
          >
            <small>
              {message?.userId === userInfo.userId
                ? "you"
                : `${userInfo.firstName}`}
              | {formatTime(message?.timestamp)}
            </small>
            <p>{message?.message}</p>
          </div>
        </div>
      </div>
    );
  };
  const styles = {
    getEmojiButton: {
      cssFloat: "right",
      border: "none",
      margin: 0,
      cursor: "pointer",
    },
    emojiPicker: {
      position: "absolute",
      bottom: "50px",
      left: 0,
      cssFloat: "left",
    },
  };

  return (
    <div className="discuss">
      <div className="discuss-container">
        <h3
          style={{
            backgroundColor: isModalOpen && "#020120",
            border: isModalOpen && "1px solid #fb352a",
          }}
          onClick={handleModalOpen}
        >
          {isModalOpen ? "Close" : "Open"} discussion forum
          <span>
            <ExpandLessIcon />
          </span>
        </h3>
        <Modal
          style={customStyles}
          isOpen={isModalOpen}
          onRequestClose={() => setModalOpen(false)}
          shouldCloseOnOverlayClick={false}
        >
          <div className="discuss-modal">
            <div className="discuss-modal-container">
              <p>Select Forum Batch</p>
              <ExpandMoreIcon />
            </div>
            <div className="discuss-search">
              <div className="discuss-search-container">
                <SearchIcon />
                <input placeholder="Search forums" />
              </div>
            </div>
            <div className="discuss-batches">
              {batch.map((data) => (
                <>
                  <div
                    onClick={() => handleChatOpen(data)}
                    className="discuss-batch"
                  >
                    <p>{String(data?.batch)}</p>
                    <FiberManualRecordIcon
                      style={{
                        color: data?.discussion[0]?.isActive ? "aqua" : "red",
                      }}
                    />
                  </div>
                </>
              ))}
            </div>
          </div>
        </Modal>
      </div>
      <Modal
        isOpen={chatOpen}
        onRequestClose={() => setChatOpen(false)}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: {
            background: "none",
            padding: "0",
          },
          content: {
            backgroundColor: "#020120",
            top: "auto",
            left: "auto",
            bottom: "0",
            right: "263px",
            width: 450,
            height: 488,
            color: "#ddd",
            padding: "0px",
            border: 0,
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          },
        }}
      >
        <div className="chat-name">
          <div className="chat-name-container">
            <p>{batchName}</p>
            <ExpandMoreIcon fontSize="large" />
            <span onClick={() => setChatOpen(false)}>
              <CloseIcon fontSize="large" />
            </span>
          </div>
          <div className="chat-messages">
            {messages.map((_mess) => (
              <Message message={_mess} />
            ))}
          </div>
          <div className="chat-footer">
            <form onSubmit={handleSubmit}>
              <div className="chat-input">
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your Message"
                ></input>
                {showEmoji && (
                  <>
                    <span
                      style={styles.emojiPicker}
                      // ref={(el) => (this.emojiPicker = el)}
                    >
                      <Picker
                      // onSelect={addEmoji}
                      // emojiTooltip={true}
                      // title="RanchoLabs"
                      />
                    </span>
                  </>
                )}
                <span onClick={() => setShowEmoji((show) => !show)}>
                  <MoodIcon />
                </span>
              </div>

              <div className="send-message">
                <input
                  onChange={handleMessageFile}
                  id="file-upload"
                  type="file"
                />
                <IconButton onClick={handleUpload}>
                  <AddCircleIcon
                    style={{
                      color: "#ddd",
                    }}
                    fontSize="large"
                  />
                </IconButton>
                <IconButton onClick={handleSubmit}>
                  <SendRoundedIcon
                    style={{
                      color: "#ddd",
                    }}
                    fontSize="large"
                  />
                </IconButton>

                <button type="submit" className="send">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default DiscussionForum;
