import React, { useEffect, useState } from "react";

function HomeBanner() {
  const [state, setStateData] = useState([]);

  useEffect(() => {
    let postUrl = `https://backend-dev.invincibletechsystems.com/wp-json/wp/v2/pages?slug="home-banner"`;
    fetch(postUrl)
      .then((data) => data.json())
      .then((data) => {
        setStateData(data);
      });
  }, []);

  console.log("jagadeesh", state);

  return (
    <div>
      {state.map((post, index) => (
        <div key={index}>
          <p dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      ))}
    </div>
  );
}

export default HomeBanner;

/*
<section className="its_banner_main_class">
      <div className="its_home_banner">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="its_banner_main_content">
                <div className="its_banner_heading">
                  <h2>We Deliver Excellence In Service And Execution</h2>
                </div>
                <div className="its_banner_para">
                  High Quality Web & Mobile Application Design & Development
                  Solution, that will help you to achieve new heights in your
                  business.
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="its_banner_right_image">
                <img
                  src="/assets/images/invincible-images/Group 64.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    */
