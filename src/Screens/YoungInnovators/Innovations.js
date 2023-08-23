import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./css/Innovations.css";
import pranav from './img/Pranav.jpg'
import joshua from './img/Joshua.jpg'
import prarthana from './img/Prarthana.png'
import yash from './img/yash.png'

const responsive = {
  mobile: {
    breakpoint: { max: 800, min: 620 },
    items: 2,
  },
  mobileSmall: {
    breakpoint: { max: 620, min: 0 },
    items: 1,
  },
};
export default function Innovations() {
  const innovations = [
    {
      id:1,
      category:"Robotics + Coding",
      video:"https://www.youtube.com/embed/Kj9ht4tpYNI",
      title:"AutoSap",
      text:"“Let your plants take care of themselves” is an automatic irrigation system that measures the soil moisture and starts the irrigation process if water is required. Auto Sap comes to the rescue of both plants and plant owners!",
      studentName:"Pranav Hegde",
      studentSchool:"Class 9, Presidency School Bangalore South",
      pic:pranav
    },
    {
      id:2,
      category:"Coding + Games",
      video:"https://www.youtube.com/embed/zVl0HpTwbDM",
      title:"The Robber Game",
      text:"The Robber Game is an arcade game in which a maze has to be solved with a tweak that you also need to collect three keys before and at the same time prevent yourself from police and reach the diamond.",
      studentName:"Darsh Goel",
      studentSchool:"Class 6th, Seth Anandram Jaipuria School ",
      pic:joshua
    },
    {
      id:3,
      category:"Coding + App",
      video:"https://www.youtube.com/embed/MPj5Un2Jglo",
      title:"Person Personality",
      text:"Perfect Personality is an application that classifies your personality type into introvert, extrovert, creative or logical based on your answers. In addition to describing who you are as a person, the app also focuses on giving tips to enhance your personality. ",
      studentName:"Agrima Srivastava",
      studentSchool:"Class 7, Delhi Public School Ghaziabad",
      pic:prarthana
    }
  ]
  return (
    <div className="innovations-container">
      <h2>
        <span>Innovations</span> Happen at Rancho Labs
      </h2>
      {window.innerWidth > 800 ? 
      innovations.map((innovation,index)=>(
        index % 2 === 0 ? 
        <div className={`innovations${index+1}`} key={index}>
        <iframe
          width="420"
          height="315"
          src={innovation.video}
          className="inno-iframe-1"
          title="yip"
          allowFullScreen={true}
        />
        <div className="innovations-box">
          <h3>{innovation.category}</h3>
          <div className="innovations-card">
            <p className="rm-pm inno-title">{innovation.title}</p>
            <p className="rm-pm iText">
              {innovation.text}
            </p>
            <p className="rm-pm iText" style={{ margin: "2% 0",color:"black",fontWeight:"600" }}>
              Innovation By:
            </p>
            <div className="stud-deets">
              <img src={innovation.pic} alt="yip"/>
              <div>
                <p className="rm-pm">{innovation.studentName}</p>
                <p className="rm-pm">{innovation.studentSchool}</p>
              </div>
            </div>
          </div>
        </div>
      </div> :
      <div className="innovations2 right-innovation">
      <div className="innovations-box">
        <h3 className="right-title">{innovation.category}</h3>
        <div className="innovations-card right-card">
          <p className="rm-pm">{innovation.title}</p>
          <p className="rm-pm iText">
            {innovation.text}
          </p>
          <p className="rm-pm iText" style={{ margin: "2% 0",color:"black",fontWeight:"600" }}>
            Innovation By:
          </p>
          <div className="stud-deets">
            <img src={innovation.pic} alt="yip"/>
            <div>
              <p className="rm-pm">{innovation.studentName}</p>
              <p className="rm-pm">{innovation.studentSchool}</p>
            </div>
          </div>
        </div>
      </div>
      <iframe
        // width="420"
        // height="315"
        src={innovation.video}
        title="yip"
        className="inno-iframe-2"
      />
    </div>

      )) : 
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        infinite={true}
        // autoPlay={true}
        autoPlaySpeed={2000}
        arrows={true}
        className="innovations-carousel"
      >
      {innovations.map((innovation,index)=>(
        <div className="inno-small" key={index}>
        <h4>{innovation.category}</h4>
        <iframe src={innovation.video} title="yip" allowFullScreen={true} />
        <div className="innovations-card inno-card">
          <p>{innovation.title}</p>
          <p className="p-text">{innovation.text}</p>
          <p className="rm-pm iText" style={{ margin: "2% 0",color:"black",fontWeight:"600" }}>
            Innovation By:
          </p>
          <div className="stud-deets">
            <img src={innovation.pic} alt="yip" />
            <div>
              <p className="rm-pm">{innovation.studentName}</p>
              <p className="rm-pm">{innovation.studentSchool}</p>
            </div>
          </div>
        </div>
      </div>
      ))}
      </Carousel>
      }

    </div>
  );
}
