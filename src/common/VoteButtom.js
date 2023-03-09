import React from "react";

export default function VoteButtom({ onClickHandler, icon }) {
  return (
    <button className="vote-button" onClick={onClickHandler}>
      <img className="vote-icon" alt="" src={icon} />
    </button>
  );
}