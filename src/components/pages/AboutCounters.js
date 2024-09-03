import React from "react";
import "../styles/AboutCounters.css";
import { useSpring, animated } from "@react-spring/web";
import { GrGroup } from "react-icons/gr";
import { FaArrowRight, FaAward, FaCheck } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { RiUserSettingsLine } from "react-icons/ri";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 1000,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}
const AboutCounters = () => {
  return (
    <div>
    <div className="counter-flex">
      <div className="counter-sub-flex">
        <IconContext.Provider
          value={{ color: "#FFFFFF", size: "50px", marginLeft: "40px" }}
        >
          <div>
            <GrGroup />
          </div>
        </IconContext.Provider>

        <h1 className="counter-h1">
          <Number n={1234} />
        </h1>
        <h4>Happy Clients</h4>
        <div className="counter-boder"></div>
      </div>
      <div className="counter-sub-flex">
        <IconContext.Provider
          value={{ color: "#FFFFFF", size: "50px", marginLeft: "40px" }}
        >
          <div>
            <FaCheck />
          </div>
        </IconContext.Provider>
        <h1 className="counter-h1">
          <Number n={1234} />
        </h1>
        <h4>Projects Completed</h4>
        <div className="counter-boder"></div>
      </div>
      <div className="counter-sub-flex">
        <IconContext.Provider
          value={{ color: "#FFFFFF", size: "50px", marginLeft: "40px" }}
        >
          <div>
            <RiUserSettingsLine />
          </div>
        </IconContext.Provider>
        <h1 className="counter-h1">
          <Number n={1234} />
        </h1>
        <h4>Dedicated Staff</h4>
        <div className="counter-boder"></div>
      </div>
      <div className="counter-sub-flex">
        <IconContext.Provider
          value={{ color: "#FFFFFF", size: "50px", marginLeft: "40px" }}
        >
          <div className="counter-icon">
            <FaAward />
          </div>
        </IconContext.Provider>
        <h1 className="counter-h1">
          <Number n={1234} />
        </h1>

        <h4>Awards Achieved</h4>
        <div className="counter-boder"></div>
      </div>
      </div>
      <div className="choose-grid">
<section>
  <header>
    <button className="choose-head-btn">Why Choosing Us!</button>
    <h1 className="choose-slogan">Few Reasons Why People Choosing Us!</h1>
  </header>
  <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
  <button className="choose-explore-btn">Explore More</button>
</section>
<section>
  <div className="choose-grid-sub">
  <div  className="choose-card">
  <IconContext.Provider
          value={{ color: "#3055E4", size: "30px"}}
        >
          <div>
            <FaCheck />
          </div>
        </IconContext.Provider>
  
 
    <div>
  <h2>Fast Executions </h2>
<p>Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>

<div> 
    <IconContext.Provider
          value={{ color: "#3055E4 ", size: "30px", marginLeft: "40px" }}
        >
          <div><span className="read-span">Read More</span>
          <FaArrowRight />
          </div>
        </IconContext.Provider> </div>
  </div>
  </div>
  <div className="choose-card">
    <span >
  <IconContext.Provider
          value={{ color: "#3055E4", size: "30px", marginLeft: "40px" }}
          
        >
          <div className="icon-hover">
            <FaCheck />
          </div>
        </IconContext.Provider>
        </span>
  <h2>Fast Executions </h2>
<p>Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
<div> 
    <IconContext.Provider
          value={{ color: "#3055E4 ", size: "30px", marginLeft: "40px" }}
        >
          <div ><span className="read-span">Read More</span>
          <FaArrowRight />
          </div>
        </IconContext.Provider> </div>
  </div>
  </div>
  <div>
  
  </div>

</section>   
<section>
<div  className="choose-card-last">
  <IconContext.Provider
          value={{ color: "#3055E4", size: "30px", marginLeft: "40px" }}
        >
          <div>
            <FaCheck />
          </div>
        </IconContext.Provider>
  
  
    <div>
  <h2>Fast Executions </h2>
<p>Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>

<div> 
    <IconContext.Provider
          value={{ color: "#3055E4 ", size: "30px", marginLeft: "40px" }}
        >
          <div><span className="read-span">Read More</span>
          <FaArrowRight />
          </div>
        </IconContext.Provider> </div>
  </div>
  </div>
</section>
      </div>

    </div>
  );
};

export default AboutCounters;
