import React, { useEffect, useState } from "react";
//import "../../public/assets/css/IN_styles.css";

function IndustriesWeServe() {
  const [state, setState] = useState([]);

  useEffect(() => {
    let postUrl = `https://backend-dev.invincibletechsystems.com/wp-json/wp/v2/pages?slug="industries-we-serve"`;
    fetch(postUrl)
      .then((data) => data.json())
      .then((data) => {
        setState(data);
      });
  }, []);

  console.log("venkatesh", state);

  return (
    <div>
      {state.map((el, index) => (
        <div key={index}>
          <p dangerouslySetInnerHTML={{ __html: el.content.rendered }} />
        </div>
      ))}
    </div>
  );
}

export default IndustriesWeServe;
