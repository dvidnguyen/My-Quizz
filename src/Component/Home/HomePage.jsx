import React from "react";
import videoHomePage from "../../asssets/video-homepage.mp4";
const HomePage = () => {
  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={videoHomePage} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <div className="title-1">There is a better way to ask</div>
        <div className="title-2">
          You don't want to make a boring form, and your audicence won't answer
          one. Create a typeform instead and make everyone happy~~
        </div>
        <button className="title-3">Get's started. It's free </button>
      </div>
    </div>
    // <div>HomePage</div>
  );
};

export default HomePage;
