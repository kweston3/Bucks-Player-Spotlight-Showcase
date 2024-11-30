import React, { useState } from "react";
import PlayerDetails from "./PlayerDetails";

const PlayerSpotlight = ({ player }) => {
  const [section, setSection] = useState(""); // Track the section to display
  const [clickedButton, setClickedButton] = useState(""); // Track the clicked button

  // Handle button click and set the section to show, and scroll to the bottom
  const handleButtonClick = (sectionName, buttonType) => {
    setSection(sectionName);
    setClickedButton(buttonType); // Set clicked button type

    // Scroll to the bottom of the page
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
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
            This months Bucks Player Spotlight features Damian Lillard, better
            known as "Dame Time". Dame joined the Milwaukee Bucks in 2023 as a 7
            time all star and has scored over 20,000 points in his career.
          </p>
          <button
            className={`main-button ${
              clickedButton === "bio" ? "clicked" : ""
            }`}
            onClick={() => handleButtonClick("bio", "bio")}
          >
            PLAYER BIO
          </button>
          <button
            className={`secondary-button ${
              clickedButton === "stats" ? "clicked" : ""
            }`}
            onClick={() => handleButtonClick("stats", "stats")}
          >
            STATS
          </button>
        </div>
      </section>

      <PlayerDetails player={player} />

      {section === "bio" && (
        <div id="player-bio">
          <div className="bio-info">
            <div className="profile-header">
              <h2>Biography</h2>
              <button
                className={`profile-button ${
                  clickedButton === "stats" ? "clicked" : ""
                }`}
                onClick={() => handleButtonClick("stats", "stats")}
              >
                Player Stats
              </button>
            </div>
            <p>
              Damian Lamonte Ollie Lillard Sr. (born July 15, 1990[1]) is an
              American professional basketball player for the Milwaukee Bucks of
              the National Basketball Association (NBA). Regarded for his big
              shots in the clutch, he has been nicknamed "Dame Time". He played
              college basketball for the Weber State Wildcats and earned
              third-team All-American honors in 2012. He was selected by the
              Portland Trail Blazers with the sixth overall pick in the 2012 NBA
              draft, and was named the NBA Rookie of the Year for the 2012–13
              season. With the team, he made seven NBA All-Star selections,
              seven All-NBA Team selections, and is the franchise's all-time
              leading scorer. In 2021, Lillard won a gold medal for the U.S.
              Olympic team in the 2020 Summer Olympics. That same year, he was
              named to the NBA 75th Anniversary Team.[2] In 2023, after a trade
              request, he was traded to the Milwaukee Bucks. Off the court,
              Lillard is also a rapper, under the stage name Dame D.O.L.L.A. He
              released his first studio album, The Letter O (2016), which
              charted on the Billboard 200, while his second and third albums,
              Confirmed (2017) and Big D.O.L.L.A. (2019), placed on the indie
              charts. In 2021, he released a fourth album, Different on Levels
              the Lord Allowed.
            </p>
          </div>
        </div>
      )}

      {section === "stats" && (
        <div id="player-stats">
          <div className="stats-info">
            <div className="profile-header">
              <h2>Stats</h2>
              <button
                className={`profile-button ${
                  clickedButton === "stats" ? "clicked" : ""
                }`}
                onClick={() => handleButtonClick("bio", "bio")}
              >
                Biography
              </button>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              sint dolorem voluptatem laborum provident beatae excepturi totam
              ducimus quo, ut, sed atque suscipit aspernatur minima at labore
              voluptates hic reprehenderit iusto veritatis obcaecati mollitia.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default PlayerSpotlight;
