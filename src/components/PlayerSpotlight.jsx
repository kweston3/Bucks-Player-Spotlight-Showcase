import React, { useState } from "react";
import PlayerDetails from "./PlayerDetails";

const PlayerSpotlight = ({ player }) => {
  const [section, setSection] = useState("bio");
  const [clickedButton, setClickedButton] = useState("");

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
            This months Bucks Player Spotlight features Damian Lillard, who
            joined the Milwaukee Bucks in 2023 and is in his 13th NBA season
            overall. Known for his incredible shooting range and clutch
            performances, "Dame Time" has made 7 all star games and scored over
            20,000 points in his illustrious career.
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
                STATS
              </button>
            </div>
            <p>
              Damian Lamonte Ollie Lillard Sr. (born July 15, 1990[1]) is an
              American professional basketball player for the Milwaukee Bucks of
              the National Basket- ball Association (NBA). Regarded for his big
              shots in the clutch, he has been nicknamed “Dame Time”. He played
              college basketball for the Weber State Wildcats and earned
              third-team All-American honors in 2012. He was selected by the
              Portland Trail Blazers with the sixth overall pick in the 2012 NBA
              draft, and was named the NBA Rookie of the Year for the 2012–13
              season. With the team, he made seven NBA All-Star selections,
              seven All-NBA Team selections, and is the franchise’s all-time
              leading scorer.
            </p>{" "}
            <p>
              In 2021, Lillard won a gold medal for the U.S. Olympic team in the
              2020 Summer Olympics. That same year, he was named to the NBA 75th
              Anni- versary Team.[2] In 2023, after a trade request, he was
              traded to the Milwaukee Bucks. Off the court, Lillard is also a
              rapper, under the stage name Dame D.O.L.L.A. He released his first
              studio album, The Letter O (2016), which charted on the Billboard
              200, while his second and third albums, Con- firmed (2017) and Big
              D.O.L.L.A. (2019), placed on the indie charts. In 2021, he
              released a fourth album, Different on Levels the Lord Allowed.
            </p>{" "}
            <p>
              2023-24 (Milwaukee Bucks): In his first season with the Bucks,
              played and started 73 games and averaged 24.3 points (16th in
              NBA), a team-high 7.0 assists (10th in NBA), 4.4 rebounds and 1.0
              steal in 35.3 minutes per game … shot 42.4% from the field, 35.4%
              from three and 92.0% from the free-throw line (4th in NBA) …
              scored 10+ points 72 times, 20+ points 51 times, 30+ points 20
              times, 40+ points 3 times … dished out 10+ assists 12 times … had
              12 double-doubles … moved into 4th on the NBA’s all-time list for
              3FGM, passing Kyle Korver (2,450) for 5th on Dec. 13 vs. IND and
              Reggie Miller (2,560) for 4th on March 8 at LAL before ending the
              season with 2,607 career makes … started the season 59th on the
              NBA’s all-time scoring list and ended in 41st (21,151) … also
              started 67th on the NBA’s all-time assists list and ended the
              season in 50th (5,659) … reached 20,000 career points on Dec. 19
              vs. SAS after scoring 40 points with a season-high 7 3FGM … then
              reached 21,000 career points on March 26 vs. LAL … made his first
              All-Star Game start and was named the 2024 NBA All-Star Game MVP …
              repeated as the 3-point contest champion at All-Star Weekend … by
              winning both, joined Michael Jordan as the only players in NBA
              history to win MVP and a Saturday night event in the same All-Star
              weekend … made 220 threes, the 3rd-most in a season in franchise
              history … scored 31 points and dished out a career-high-tying 16
              assists on March 17 vs. PHX, becoming the first player in
              franchise history to score 30+ points and dish out 15+ assists in
              a game … had 41 points in a win over the Clippers on March 4 …
              neared a triple-double in a win at MIN on Feb. 23, scoring 21
              points with 10 assists and a season-high-tying 9 rebounds … scored
              a season-high 45 points and dished out 11 assists on Jan. 20 at
              DET … hit a game-winning three at the buzzer in overtime to give
              the Bucks a 143-142 win over the Kings on Jan. 14 … moved into the
              NBA’s Top 50 all-time scorers on Dec. 21 vs. ORL … dished out a
              then-season-high 13 assists and scored 37 points on Nov. 15 at TOR
              … had a historically great Bucks debut, scoring 39 points in the
              season opener vs. PHI on Oct. 26, marking the 4th-most points
              scored in NBA history by a player making his debut with a team and
              the most points in a Bucks debut in franchise history … also went
              17-for-17 that game, matching the most free throws made in
              franchise history without a miss … missed 2 games (Nov. 9-11) with
              right calf soreness … missed 2 games (Jan. 8, March 30) for
              personal reasons … missed 2 games (Feb. 6-8) with a left ankle
              sprain … missed 2 games (April 2-3) with a right groin strain
              …missed 1 game (April 12) with left adductor soreness.
            </p>
          </div>
        </div>
      )}

      {section === "stats" && (
        <div id="player-stats">
          <div className="stats-info">
            <div className="profile-header">
              <h2>Regular Season Stats</h2>
              <button
                className={`profile-button ${
                  clickedButton === "stats" ? "clicked" : ""
                }`}
                onClick={() => handleButtonClick("bio", "bio")}
              >
                PLAYER BIO
              </button>
            </div>

            <div className="details-info">
              <div className="detail-group">
                <h4>Points</h4>
                <h3>26.0</h3>
              </div>
              <div className="detail-group">
                <h4>Rebounds</h4>
                <h3>4.5</h3>
              </div>
              <div className="detail-group">
                <h4>Assists</h4>
                <h3>7.7</h3>
              </div>
              <div className="line"></div>
              <div className="detail-group">
                <h4>FG%</h4>
                <h3>44.1</h3>
              </div>
              <div className="detail-group">
                <h4>FG3%</h4>
                <h3>34.8</h3>
              </div>
              <div className="detail-group">
                <h4>FT%</h4>
                <h3>92.0</h3>
              </div>
              <div className="detail-group">
                <h4>eFG%</h4>
                <h3>53.0</h3>
              </div>
              <div className="line"></div>
              <div className="detail-group">
                <h4>PER</h4>
                <h3>22.8</h3>
              </div>
              <div className="detail-group">
                <h4>WS</h4>
                <h3>2.1</h3>
              </div>
            </div>
          </div>

          <div className="stats-info">
            <div className="profile-header">
              <h3>2023-24 Season</h3>
            </div>

            <div className="details-info">
              <div className="detail-group">
                <h4>Points</h4>
                <h3>24.3</h3>
              </div>
              <div className="detail-group">
                <h4>Rebounds</h4>
                <h3>4.4</h3>
              </div>
              <div className="detail-group">
                <h4>Assists</h4>
                <h3>7.0</h3>
              </div>
              <div className="line"></div>
              <div className="detail-group">
                <h4>FG%</h4>
                <h3>42.4</h3>
              </div>
              <div className="detail-group">
                <h4>FG3%</h4>
                <h3>35.4</h3>
              </div>
              <div className="detail-group">
                <h4>FT%</h4>
                <h3>92.0</h3>
              </div>
              <div className="detail-group">
                <h4>eFG%</h4>
                <h3>51.0</h3>
              </div>
              <div className="line"></div>
              <div className="detail-group">
                <h4>PER</h4>
                <h3>22.8</h3>
              </div>
              <div className="detail-group">
                <h4>WS</h4>
                <h3>2.1</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PlayerSpotlight;
