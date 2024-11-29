import React, { useEffect, useState } from "react";
import PlayerSpotlight from "./components/PlayerSpotlight";
import PlayerBio from "./components/PlayerBio";
import { fetchPlayerData } from "./playerData";
import Header from "./components/Header";

const App = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
    const getPlayerData = async () => {
      try {
        const data = await fetchPlayerData();

        // Find Damian Lillard in the data
        const damianLillard = data.find(
          (player) =>
            player.first_name.toLowerCase() === "damian" &&
            player.last_name.toLowerCase() === "lillard"
        );

        setSelectedPlayer(damianLillard);
      } catch (error) {
        console.error("Error fetching player data:", error);
      }
    };

    getPlayerData();
  }, []);

  if (!selectedPlayer) return <p>Loading...</p>;

  return (
    <>
      <main>
        <Header />
        <PlayerSpotlight player={selectedPlayer} />
        <PlayerBio />
      </main>
    </>
  );
};

export default App;
