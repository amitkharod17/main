import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "./css/Join.css";
import pic1 from './img/join1.png'
import pic2 from './img/join2.png'
import pic3 from './img/join3.png'
import pic from './img/join.png'
import picMini from './img/joinMini.png'


export default function Join() {
  const background = window.innerWidth > 630 ? pic : picMini;
  const styles = {
    backgroundImage:`url(${background})`,
    backgroundPosition:"center"
  }
  return (
    <div className="join-container" style={styles}>
      {/* <img src={banner} /> */}
      <div className="join-text">
        <div>
          <h2 className="join-title">Join the Rancho Revolution</h2>
          <div>
            <div>
              <img src={pic1} alt="yip" />
              <div>
                <h3 className="rm-pm">
                <CountUp end={50000}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>+
                </h3>
                <p className="rm-pm">Hours of sessions conducted</p>
              </div>
            </div>
            <div>
              <img src={pic2} alt="yip" />
              <div>
                <h3 className="rm-pm">
                <CountUp end={15000}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>+
                </h3>
                <p className="rm-pm">Students trained</p>
              </div>
            </div>
            <div>
              <img src={pic3} alt="yip" />
              <div>
                <h3 className="rm-pm">
                <CountUp end={250}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>+</h3>
                <p className="rm-pm">Innovations developed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
