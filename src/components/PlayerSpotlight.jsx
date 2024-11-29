import React from "react";
import MainButton from "./MainButton";
import SecondaryButton from "./SecondaryButton";

const PlayerSpotlight = ({ player }) => {
  return (
    <section id="player-spotlight">
      <div className="player-image">
        <img
          src={`/images/${player.first_name.toLowerCase()}-${player.last_name.toLowerCase()}.png`}
          alt={`${player.first_name} ${player.last_name}`}
        />
      </div>
      <div className="player-info">
        <h2>{`${player.first_name} ${player.last_name}`}</h2>
        <p className="spotlight-paragraph">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
          pariatur, temporibus, error fuga id libero sunt sint est ut quae
          consequuntur dolorem tempora. Itaque voluptatem odit optio dicta a,
          quos sunt nesciunt quisquam culpa eum ipsum voluptatum id quis
        </p>
        <MainButton text="PLAYER BIO" />
        <SecondaryButton text="STATS" />
      </div>
    </section>
  );
};

export default PlayerSpotlight;
