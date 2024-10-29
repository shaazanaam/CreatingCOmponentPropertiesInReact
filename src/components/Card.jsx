import React from "react";
import DetailInfo from "../components/info";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <DetailInfo myinfo={props.tel} />
        <DetailInfo myinfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
