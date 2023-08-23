import React , {useState} from "react";
import "./css/Classroom.css";
import pic1 from './img/cls1.png'
import pic2 from './img/cls2.png'
import pic3 from './img/cls3.png'
import pic from './img/cls.png'
import classroompic from './img/classroompic.png'

export default function Classroom() {
  const [selected,setSelected]=useState(0);
  const handleChange = (id) => {
    setSelected(id);
  }
  const classes = [
    {
      id:0,
      name:"Coding and App Development",
      img:pic1,
    },
    {
      id:1,
      name:"Coding and Robotics",
      img:pic2,
    },
    {
      id:2,
      name:"Coding and Game Development",
      img:pic3,
    },
  ]
  return (
    <div className="classroom-container">
      <h2>
        Sneak Peak into our <span>Classroom</span>
      </h2>
      <div>
      <div className="cls-btns">
      {classes.map((cls,i)=>(
        <div key={cls.id} onClick={()=>handleChange(i)} className={selected === i ? "cls-selected" : "" }>
          <img src={cls.img} alt={cls.name} /><p>{cls.name}</p>
        </div>
      ))}
      </div>
        <img src={classroompic} alt="yip" />
      </div>
    </div>
  );
}
