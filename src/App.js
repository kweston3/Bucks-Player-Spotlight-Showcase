import React from "react";
import Button from "./components/Button";

const App = () => {
  return (
    <>
      <main>
        <h1>Bucks Player Spotlight</h1>
        <section id="player-spotlight">
          <div>Lillard Photo</div>
          <div>
            <h2>Damin Lillard Info</h2>
            <Button text="Click Me" />
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
