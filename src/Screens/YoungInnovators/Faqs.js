import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import "./css/Faqs.css";
import arrow from './img/faqarr.png'

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {
  },
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {
    background:"transparent linear-gradient(90deg, #0008FF  0%, #0008FF 100%)"
  },
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function Faqs() {
  const [faq, setFaq] = useState({
    question: "How will this program benefit my kid?",
    answer:
      "Young Innovators Program is a stepping stone to the world of technology. The program inculcates all the elementary and some advanced concepts, so that students can gauge their interest in their desired field of study(Coding/Robotics/Game/App Development). Since kids at this age have varying interests, after the YIP they will be able to make informed decisions about their future.",
  });
  const [index, setIndex] = useState(0);
  const faqs = [
    {
      id: 1,
      question: "How will this program benefit my kid?",
      answer:
        "Young Innovators Program is a stepping stone to the world of technology. The program inculcates all the elementary and some advanced concepts, so that students can gauge their interest in their desired field of study(Coding/Robotics/Game/App Development). Since kids at this age have varying interests, after the YIP they will be able to make informed decisions about their future. ",
    },
    {
      id: 2,
      question:
        "Will my kid be overburdened when his/her school resumes?",
      answer:
        "The YIP is specially designed to offer a healthy balance between students’ school and after school hours. The classes at Rancho Labs are much more engaging, interactive, and kids get time off their academic workload. Since the pandemic has severely affected social interaction, this is an excellent way for them to meet new peer groups that share similar interests and participate in fun activities.",
    },
    {
      id: 3,
      question: "Will the school timings clash with the class timings?",
      answer:
        "The class timings are flexible so as to suit the needs of the student. Students are required to fill out a document with their availability at the start of the program and the batches will be allocated accordingly. In addition to that, every batch contains a small number of students in order to easily communicate with their instructor.",
    },
    {
      id: 4,
      question: "Will these classes be provided by the school?",
      answer:
        "We are an independent organization offering experiential learning that is customized according to the interests of every student. It is not provided by many schools as they still adhere to rote learning methodology. ",
    },
    {
      id: 5,
      question: " Will this certificate help my kid in the future?",
      answer:
        "Certification from RanchoLabs adds credible value to students’ career in technology. Our past students got through foreign universities post RanchoLabs certification program. Our certifications serve as a quick gateway to climb up their career ladder.",
    },
    {
      id: 6,
      question: "What is the Vision behind Rancho Labs?",
      answer:
        "Our long term goal is to alleviate the sense of dissatisfaction many people of India feel post their education. We want everybody to have at least tried their hands out at what they are curious about. Student's holistic development can only be achieved if they acquire essential skills and carry the confidence gained from them to pursue their passion and come out with flying colours.",
    },
    {
      id: 7,
      question: "I think math is more crucial for my child's future than coding?",
      answer:
        "Coding and maths complement each other. Developing an algorithm to solve a problem requires logical thinking. Coding allows you to think in this manner and sharpens your mind. Furthermore, coding improves your math skills and enables you to approach problems differently.",
    },
    {
      id: 8,
      question: "Is it necessary to have physical components to learn robotics? How will my child learn robotics online?",
      answer:
        "To get started in robotics, you do not need to have physical components. The online simulation softwares impart students with great knowledge and learning experience in a secure and safe environment. The interactive virtual platform triggers a sense of curiosity in students who get undivided attention from their mentors. ",
    },
    {
      id: 9,
      question: " Is this a one time payment and are there any hidden fees?",
      answer:
        " No hidden fees or charges are involved, because this is a one-time payment.",
    },
  ];
  const handleClick = (faq, i) => {
    setFaq(faq);
    setIndex(i);
  };
  const [expanded, setExpanded] = React.useState(0);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="faq-container">
      <h2>
        All of your <span>Questions </span>at one place
      </h2>
      {window.innerWidth > 700 ? (
        <div className="faq-main">
          <div className="q-cont">
            {faqs.map((faq, i) => (
              <div
                key={i}
                onClick={() => handleClick(faq, i)}
                className={i === index && "faq-active"}
              >
                <i className="fas fa-circle faq-circle"></i>
                <p>{faq.question}</p>
                <img src={arrow} alt="->" className="faq-arrow"/>
              </div>
            ))}
          </div>
          <div className="faq-ans">
            <p style={{ fontWeight: "600", fontSize: "1.2rem" }}>
              {faq.question}
            </p>
            <hr align="left" />
            <p>{faq.answer}</p>
          </div>
        </div>
      ) : (
        <div className="faq-vertical">
          {faqs.map((faq, i) => (
            <Accordion
              square
              expanded={expanded === i}
              onChange={handleChange(i)}
              key={i}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
                className="faq-vertical-header"
              >
                <i className="fas fa-circle faq-circle"></i>
                <p>{faq.question}</p>
                {expanded === i ? <img src={arrow} alt="->" className="faq-arrow faq-arrow-down"/> : <img src={arrow} alt="->" className="faq-arrow"/>}
              </AccordionSummary>
              <AccordionDetails style={{background: "#E8F0FE",display:"flex",flexDirection:"column"}}>
                <hr className="faq-hr" />
                <p className="faq-vertical-ans">{faq.answer}</p>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      )}
    </div>
  );
}
