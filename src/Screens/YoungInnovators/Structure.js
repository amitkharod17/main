import React from "react";
import $ from "jquery";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import "./css/Structure.css";
import pic1 from "./img/cls1.png";
import pic2 from "./img/cls2.png";
import pic3 from "./img/cls3.png";
import clock from "./img/clock.png";

const curriculumData = [
  {
    id: 1,
    classes: "sixToEight",
    curriculum: [
      {
        One: [{
          time: "8",
          learn: ["Variables, If do,Label Input,", " Button, Image, Screen Switching Translator", "Speech Recognition"],
          build: ["Translator App", "Speech Recognition App", "Object Recognition App "],
          description: "Learn incorporating variables, if-do-condition, button design, hyperlinking, images and labels and build apps like Translator and Speech Recognition"
        }],
        Two: [{
          time: "8",
          learn: ["Element Design and Structure", "Rows and Columns, Padding, Margin Conditions", " Firebase Integration"],
          build: ["Video Recorder and Player App", "To do List", "Navigation App", "Ecommerce App", "Login & Signup"],
          description: "The concept of rows, columns, padding, margin, conditions and firebase integration for cloud storage will help you learn Element Design and Application Structure & Functionality"
        }],
        Three: [{
          time: "8",
          learn: ["Local & Cloud Storage", "List, Loop, Functions", "User Authentication"],
          build: ["Quiz App 1 -True & False", "Realtime Chat Application", "Quiz App 2 - MCQs"],
          description: "Develop creative and technological innovation project to solve societal problems based on the learning attained through classes and projects"
        }]
      },
      {
        One: [{
          time: "8",
          learn: ["Block Coding Sensors"],
          build: ["Traffic Light Controller", "Social Distancing Project", "Thief Detector"],
          description: "Students will get to learn programming fundamentals and application of electronics like breadboard, sensors and LEDs etc."
        }],
        Two: [{
          time: "8",
          learn: ["C++ Coding", "Motors and Motor Driver"],
          build: ["Water Tank Alarm", "Smart Dustbin", "Automated Door Obstacle Avoiding Robot"],
          description: "Learn about text programming, motors and build amazing projects like Smart Dustbin, Automated Door and Obstacle Avoiding Robot"
        }],
        Three: [{
          time: "8",
          learn: ["Introduction to Robotics Drives Operators"],
          build: ["Line Follower Robot Innovation Project"],
          description: "Develop creative and technological innovation project to solve societal problems based on the learning attained through classes and projects"
        }]
      },
      {
        One: [{
          time: "8",
          learn: ["Variables", "If_else condition", "2D Animation"],
          build: ["Bouncing Ball", "Collect the Coins Game", "Bunny Eats Carrot Game"],
          description: "Learn variables, if else conditions in javascript block coding and game design to develop 2D games like Bouncing Ball, Collect the Coins and Bunny Eats Carrot"
        }],
        Two: [{
          time: "8",
          learn: ["Nested Conditions Gravity", "Velocity and Frames Level Design"],
          build: ["T-rex Game", "Alien Run Game", "Mario Game", "Mario Level 2  and 3"],
          description: "Learn nested conditions, gravity, give velocity to sprites and develop new and advanced level games like T-rex games, alien run game, mario game"
        }],
        Three: [{
          time: "8",
          learn: ["Concept of Lives in the Game", "Algorithm Design and Development"],
          build: ["Pacman Game", "Maze Runner Level 1 & 2", "Innovation Project"],
          description: "Come up with your own ideas and build exciting games based on the learning attained through classes and projects"
        }]
      }
    ],
  },
  {
    id: 2,
    classes: "nineToTen",
    curriculum: [
      {
        One: [{
          time: "8",
          learn: ["Variables, If do,Label Input,", " Button, Image, Screen Switching Translator", "Speech Recognition"],
          build: ["Translator App", "Speech Recognition App", "Object Recognition App "],
          description: "Learn incorporating variables, if-do-condition, button design, hyperlinking, images and labels and build apps like Translator and Speech Recognition"
        }],
        Two: [{
          time: "8",
          learn: ["Element Design and Structure", "Rows and Columns, Padding, Margin Conditions", " Firebase Integration"],
          build: ["Video Recorder and Player App", "To do List", "Navigation App", "Ecommerce App", "Login & Signup"],
          description: "The concept of rows, columns, padding, margin, conditions and firebase integration for cloud storage will help you learn Element Design and Application Structure & Functionality"
        }],
        Three: [{
          time: "8",
          learn: ["Local & Cloud Storage", "List, Loop, Functions", "User Authentication"],
          build: ["Quiz App 1 -True & False", "Realtime Chat Application", "Quiz App 2 - MCQs"],
          description: "Develop creative and technological innovation project to solve societal problems based on the learning attained through classes and projects"
        }]
      },
      {
        One: [{
          time: "8",
          learn: ["Block Coding Sensors"],
          build: ["Traffic Light Controller", "Social Distancing Project", "Thief Detector"],
          description: "Students will get to learn programming fundamentals and application of electronics like breadboard, sensors and LEDs etc."
        }],
        Two: [{
          time: "8",
          learn: ["C++ Coding", "Motors and Motor Driver"],
          build: ["Water Tank Alarm", "Smart Dustbin", "Automated Door Obstacle Avoiding Robot"],
          description: "Learn about text programming, motors and build amazing projects like Smart Dustbin, Automated Door and Obstacle Avoiding Robot"
        }],
        Three: [{
          time: "8",
          learn: ["Introduction to Robotics Drives Operators"],
          build: ["Line Follower Robot Innovation Project"],
          description: "Develop creative and technological innovation project to solve societal problems based on the learning attained through classes and projects"
        }]
      },
      {
        One: [{
          time: "8",
          learn: ["Variables", "If_else condition", "2D Animation"],
          build: ["Bouncing Ball", "Collect the Coins Game", "Bunny Eats Carrot Game"],
          description: "Learn variables, if else conditions in javascript block coding and game design to develop 2D games like Bouncing Ball, Collect the Coins and Bunny Eats Carrot"
        }],
        Two: [{
          time: "8",
          learn: ["Nested Conditions Gravity", "Velocity and Frames Level Design"],
          build: ["T-rex Game", "Alien Run Game", "Mario Game", "Mario Level 2  and 3"],
          description: "Learn nested conditions, gravity, give velocity to sprites and develop new and advanced level games like T-rex games, alien run game, mario game"
        }],
        Three: [{
          time: "8",
          learn: ["Concept of Lives in the Game", "Algorithm Design and Development"],
          build: ["Pacman Game", "Maze Runner Level 1 & 2", "Innovation Project"],
          description: "Come up with your own ideas and build exciting games based on the learning attained through classes and projects"
        }]
      },
    ],
  },
];
const Curriculum = ({ data }) => {
  // console.log(data)
  return (
    <div className="curriculum-data">
      <div>
        <div>
          <div className="wk-first">
            <p>What you give</p>
            <hr />
            <div className="card-time">
              <img src={clock} alt={data.time} className="card-clock" />
              <p>{data.time} Hours</p>
            </div>
          </div>
          <div className="wk-second">
            <p>What you get</p>
            <hr />
            <div className="wk-second-div">
              <h4>Learn</h4>
              <div>
                {data.learn.map((item, index) => (
                  <div key={index}>
                    <i className="fas fa-check"></i>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="wk-second-div">
              <h4>Build</h4>
              <div>
                {data.build.map((item, index) => (
                  <div key={index}>
                    <i className="fas fa-check"></i>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="wk-p">{data.description}</p>
      </div>
    </div>
  );
};

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    alignItems: "center",
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
      background: "#B6D5FF",
      borderRadius: "50%",
    },
    margin: "0.3rem auto",
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    marginBottom: -1,
    maxHeight: "5px",
    "&$expanded": {
      maxHeight: "5px",
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
      fontWeight: "bold",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const VerticalAccordian = ({ data }) => {
  const [expanded, setExpanded] = React.useState(0);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div style={{ margin: "5rem auto 2rem" }}>
      {["One", "Two", "Three"].map((list, index) => (
        <Accordion
          square
          expanded={expanded === index}
          onChange={handleChange(index)}
          className={`s-accordian ${list === "Three" ? "s-accordian-last" : ""}`}
          key={index}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            className="s-accordian-header"
          >
            {list === "Three" ? (
              <p className={`innoProject-color-${index}`}>
                Month {index + 1}: <b>Innovation Project</b>{" "}
              </p>
            ) : (
              <p>Month {index + 1}</p>
            )}
          </AccordionSummary>
          <AccordionDetails className="s-data">
            <Curriculum data={data[list][0]} />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
export default class Structure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aIndex: -1,
      selected: 0,
      classes: 0,
      curriculum: 0,
      textDescrip: "Two clicks a cab is here, one click the food is here. Aren’t you amazed with this seamless technology? Come let’s learn what it takes to build such amazing, user-friendly apps!"
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClassChange = this.handleClassChange.bind(this);
    this.handleDetailed = this.handleDetailed.bind(this);
    this.horizontalAccordions = "";
    this.textDescrip = ["Two clicks a cab is here, one click the food is here. Aren’t you amazed with this seamless technology? Come let’s learn what it takes to build such amazing, user-friendly apps!",
      "“I’m the mechanic, I fix things,” makes me think of “I’m the doctor, I help people.” Learn coding and electronics, and build controllable vehicles to automatic arms.",
      "If you think Racing, Arcade, Adventure, Action, Shooting and Simulation is your thing, then what are you waiting for? Join us to learn coding to develop amazing games."]
  }

  addCollapsedInAccordion() {
    this.horizontalAccordions = $("#accordionHorizontalExample");
    this.horizontalAccordions.each((index, element) => {
      const accordion = $(element);
      const collapse = accordion.find(".collapse");
      const bodies = collapse.find("> *");
      accordion.height(accordion.height());
      bodies.width(bodies.eq(0).width());
      collapse.not(".show").each((index, element) => {
        $(element)
          .parent()
          .find("[data-toggle='collapse']")
          .addClass("collapsed");
      });
    });
  }

  componentDidMount() {
    this.addCollapsedInAccordion();

    this.setState({
      aIndex: 0
    })
  }

  btns = [
    {
      id: 0,
      img: pic1,
      name: "Coding and App Development",
    },
    {
      id: 1,
      img: pic2,
      name: "Coding and Robotics",
    },
    {
      id: 2,
      img: pic3,
      name: "Coding and Game Development",
    },
  ];

  handleDetailed = () => {
      window.open('https://rancho-labs-app.s3.us-east-2.amazonaws.com/YIP2022/Young+Innovators+Program+2022+(1).pdf',
      "_blank");
  }

  handleClick = (i) => {
    this.setState({
      selected: i,
      textDescrip: this.textDescrip[i]
    });
    // console.log(this.state.textDescrip)
    if (window.innerWidth > 780) {
      let viewBtn = $("#viewStructure");
      if (i !== 0) viewBtn.removeClass("detailed");
      else viewBtn.addClass("detailed");
    }
  };

  handleClassChange = (cls) => {
    this.setState({
      classes: cls,
    });
  };

  // function for horizontal accordion
  handleAccord = (list, index) => {
    // console.log("click", list);
    let newIndex;

    if (this.state.aIndex === 2 && index === 1) { newIndex = index }
    else if (this.state.aIndex === 2) { newIndex = 0 }
    else if (this.state.aIndex === 1 && index === 0) { newIndex = 0 }
    else if (this.state.aIndex === 1) { newIndex = 2 }
    else if (this.state.aIndex === 0 && index !== 2) { newIndex = 1 }
    else if (this.state.aIndex !== index) { newIndex = index }

    this.addCollapsedInAccordion();

    this.setState({
      aIndex: newIndex
    })
  }

  render() {
    return (
      <div className="structure-container">
        <h2>Program Structure</h2>
        <div className="s-initial-btns">
          <button
            onClick={() => this.handleClassChange(0)}
            className={this.state.classes === 0 ? "selected-class" : ""}
          >
            Classes 6-8
          </button>
          <button
            onClick={() => this.handleClassChange(1)}
            className={this.state.classes === 1 ? "selected-class" : ""}
          >
            Classes 9-10
          </button>
        </div>
        <div className="div-btns">
          {this.btns.map((btn) => (
            <div
              key={btn.id}
              onClick={() => this.handleClick(btn.id)}
              className={
                this.state.selected === btn.id
                  ? `btn-selected st-${btn.id} `
                  : ""
              }
            >
              <img src={btn.img} alt={btn.name} />
              <p>{btn.name}</p>
            </div>
          ))}
        </div>
        <p>
          {this.state.textDescrip}
        </p>
        {window.innerWidth > 780 ? (
          <div>
            <div className="accordion width" id="accordionHorizontalExample">
              {["One", "Two", "Three"].map((list, index) => (

                <div className="card" key={index}>
                  <div
                    // className={`card-header innoProject-${list === "Three" ? this.state.selected + 1 : ""}`}
                    className={list === "Three" ? `card-header innoProject-1` : `card-header`}
                    onClick={() => this.handleAccord(list, index)}
                    data-toggle="collapse"
                    data-target={`#collapse${list}`}
                  >
                    {list === "Three" ? (
                      <p className={`innoProject-color-${this.state.selected}`}>
                        Month {index + 1}: <b style={{ fontWeight: "600" }}>Innovation Project</b>{" "}
                      </p>
                    ) : (
                      `Month ${index + 1}`
                    )}
                  </div>

                  <div
                    id={`collapse${list}`}
                    className={`collapse width ${this.state.aIndex === index && "show"
                      }`}
                    data-parent="#accordionHorizontalExample"
                  >
                    <div className="card-body">
                      <Curriculum
                        data={
                          curriculumData[this.state.classes].curriculum[
                          this.state.selected
                          ][list][0]
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <VerticalAccordian
            data={
              curriculumData[this.state.classes].curriculum[this.state.selected]
            }
          />
        )}
        <button className="st-btn" id="viewStructure" onClick={() => this.handleDetailed()} >View Detailed Structure</button>
      </div>
    );
  }
}
