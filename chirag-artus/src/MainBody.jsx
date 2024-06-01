import React, { useEffect, useState } from "react";

const MainBody = () => {
  const [artusData, setArtusData] = useState(null);
  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch(
          "https://entities-alpha.vercel.app/entity_details"
        );
        console.log("Response is >>>>>>", response);
        if (!response.ok) {
          console.log("Error is thrown>>>", response.statusText);
          throw new Error("Network response was not ok " + response.statusText);
        }
        const data = await response.json();
        console.log("DATA is >>>>>>", data);
        setArtusData(data.slice(0, 16));
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchExperiences();
  }, []);

  useEffect(() => {
    if (artusData) {
      console.log("ArtusData is >>>>>>", artusData);
    }
  }, [artusData]);

  return (
    <div>
      {artusData ? (
        <div className="container">
          <div className="row">
            {
              artusData.map((item, idx) => (
                <div className="card" key={idx}>
                  <p className="components">
                    Components
                  </p>
                  <div className="item-details">
                    <ul className="list-style">
                      <li className="item-name">{item.name}</li>
                      <li className="item-snippet">{item.snippet}</li>
                    </ul>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="button">
            <button className="next-button">Next</button>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default MainBody;
