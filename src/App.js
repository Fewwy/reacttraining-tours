import React, { useState } from "react";
import { data } from "./data";

const App = () => {
  const [tours, setTours] = useState(data);
  const removeTour = (id) => {
    setTours((oldTours) => {
      let newTours = oldTours.filter((advertisment) => advertisment.id !== id);
      return newTours;
    });
  };
  return (
    <>
      {tours.map((advertisment) => {
        const { id, tourname, price, shortdescr, image } = advertisment;
        return (
          <div className="container">
            <div key={id} className="item">
              <h4>{tourname}</h4>
              <img src={image} alt="" />
              <p id="description">
                Description : {shortdescr}
                <button>...Show More</button>
              </p>
              <p>{price}</p>
              <button onClick={() => removeTour(id)} className="btn">
                Not Interested
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default App;
