import React from "react";

const PlayerDetails = ({ player }) => {
  return (
    <section id="player-details">
      <div className="details-info">
        <div className="detail-group">
          <h4>Name</h4>
          <h3>{`${player.first_name} ${player.last_name}`}</h3>
        </div>
        <div className="detail-group">
          <h4>Jersey</h4>
          <h3>{`#${player.jersey_number}`}</h3>
        </div>
        <div className="detail-group">
          <h4>Height</h4>
          <h3>{`${player.height}`}</h3>
        </div>
        <div className="detail-group">
          <h4>Weight</h4>
          <h3>{`${player.weight}`}</h3>
        </div>
        <div className="detail-group">
          <h4>Position</h4>
          <h3>{`${player.position}`}</h3>
        </div>
        <div className="detail-group">
          <h4>School</h4>
          <h3>{`${player.school_name}`}</h3>
        </div>
      </div>
    </section>
  );
};

export default PlayerDetails;
