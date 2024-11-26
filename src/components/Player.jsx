import React, { useEffect, useState } from "react";
import { fetchPlayerData } from "../playerData";

function Player() {
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPlayerData = async () => {
      try {
        const players = await fetchPlayerData();

        // Find a specific player
        const specificPlayer = players.find(
          (p) => p.first_name === "Damian" // Find Damian Lillard
        );

        setPlayer(specificPlayer);
      } catch (error) {
        console.error("Error fetching player data:", error);
      } finally {
        setLoading(false);
      }
    };

    getPlayerData();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!player) return <p>Player not found!</p>;

  return (
    <div>
      <h1>Player Details</h1>
      <p>
        <strong>Name:</strong> {player.first_name} {player.last_name}
      </p>
      <p>
        <strong>Jersey Number:</strong> {player.jersey_number}
      </p>
      <p>
        <strong>Height:</strong> {player.height}
      </p>
      <p>
        <strong>Weight:</strong> {player.weight}
      </p>
      <p>
        <strong>Position:</strong> {player.position}
      </p>
      <p>
        <strong>School:</strong> {player.school_name}
      </p>
    </div>
  );
}

export default Player;
