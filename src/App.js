import React from "react";
import Button from "./components/Button";
import Player from "./components/Player";

const App = () => {
  return (
    <>
      <main className="py-3">
        <div className="App">
          <h1>Bucks</h1>
          <Button text="Click Me" />
          <Player />
        </div>
      </main>
    </>
  );
};

export default App;
