import React from "react";
import Marquee from "react-fast-marquee";

function Header() {
  return (
    <header id="home" >
      <div class="header-content">
        <div class="content">
          <h1 class="header-title">
            HI!  <br /> I'm Abanoub Nagy
          </h1>
          <p class="header-text">
            I'm a Front end developer with 2 years of Profesional experience i
            love to build cool websites from scratch
          </p>
          <a href="#work" class="header-btn">
            My Projects
          </a>
        </div>
      </div>
      <div class="bg"></div>
      <Marquee className="marquee"  autoFill={false} speed={50} style={{position:"absolute",scale:"2",right:"0",bottom:"0",transform:"rotate(-50deg)"}}>
        <p className="marqueeText colored">& DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & DEVELOPER & DESIGNER & FRONT END & BACK END &  </p>
      </Marquee>
      <Marquee className="marquee"  autoFill={false} speed={80} style={{position:"absolute",scale:"2",right:"0",bottom:"-350px",transform:"rotate(-50deg)"}}>
        <p className="marqueeText ">& DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & DEVELOPER & DESIGNER & FRONT END & BACK END &  </p>
      </Marquee>
      <Marquee className="marquee"  autoFill={false} speed={50} style={{position:"absolute",scale:"2",right:"0",bottom:"-700px",transform:"rotate(-50deg)"}}>
        <p className="marqueeText colored">& DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & DEVELOPER & DESIGNER & FRONT END & BACK END &  </p>
      </Marquee>
      <Marquee className="marquee"  autoFill={false} speed={80} style={{position:"absolute",scale:"2",right:"0",bottom:"350px",transform:"rotate(-50deg)"}}>
        <p className="marqueeText ">& DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & FRONT END & BACK END & DEVELOPER & DESIGNER & DEVELOPER & DESIGNER & FRONT END & BACK END &  </p>
      </Marquee>
    </header>
  );
}

export default Header;
