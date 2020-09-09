import React, { useEffect, useState } from "react";

function LatestWork() {
  const [state, setStateData] = useState([]);

  useEffect(() => {
    let postUrl = `https://backend-dev.invincibletechsystems.com/wp-json/wp/v2/pages?slug="latest-work"`;
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

export default LatestWork;
