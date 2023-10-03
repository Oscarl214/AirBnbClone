import React from 'react';

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card() {
  return (
    <section className="section-card">
      <img src="./image 12.png" className="card--image" />
      <div className="card-info">
        <div className="card-rating">
          <img src="./Star 1.png" className="card-star" />
          <p>5.0 (6) USA</p>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p className="card-p">
          <span>From $136</span> / person
        </p>
      </div>
    </section>
  );
}
