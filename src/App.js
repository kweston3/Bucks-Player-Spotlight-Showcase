import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import PlayerSpotlight from "./components/PlayerSpotlight";
import { fetchPlayerData } from "./playerData";

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
      </main>
    </>
  );
};

export default App;
