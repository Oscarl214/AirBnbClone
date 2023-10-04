import React from 'react';

export default function Card(props) {
  let badgeText;
  if (props.cardInfo.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.cardInfo.location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <section className="section-card">
      <div className="card--badge">{badgeText}</div>
      <img src={props.cardInfo.coverImg} className="card--image" />
      <div className="card-info">
        <div className="card-rating">
          <img src="./Star 1.png" className="card-star" />
          <p>
            {props.cardInfo.stats.rating} ({props.cardInfo.stats.reviewcount}){' '}
            {props.cardInfo.location}
          </p>
        </div>
        <p>{props.cardInfo.title}</p>
        <p className="card-p">
          <span>From {props.cardInfo.price}</span> / person
        </p>
      </div>
    </section>
  );
}
