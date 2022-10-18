import React from "react";
import { emojipedia } from "../emojipedia";
import { Card } from "./Card";

function createCard(emojiWhat) {
  return (
    <Card
      emoji={emojiWhat.emoji}
      name={emojiWhat.name}
      meaning={emojiWhat.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;

/**** How to use the map function to truancate the text to only a 100 characters ****/

// const newEmojipedia = emojipedia.map(function (emojiEntry) {
//   return emojiEntry.meaning.substring(0, 100);
// });

// console.log(newEmojipedia);
