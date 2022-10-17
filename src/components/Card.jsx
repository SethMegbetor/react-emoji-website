import React from "react";
import { Emoji } from "./Emoji";
import { Name } from "./Name";
import { Details } from "./Details";

function Card(props) {
  return (
    <div>
      <div className="term">
        <dt>
          <Emoji emoji={props.emoji} />
          <Name name={props.name} />
        </dt>
        <dd>
          <Details meaning={props.meaning} />
        </dd>
      </div>
    </div>
  );
}

export { Card };
