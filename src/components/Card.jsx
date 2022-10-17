import React from "react";
import { Emoji } from "./Emoji";
import { Name } from "./Name";
import { Details } from "./Details";

function Card(props) {
  return (
    <div>
      <div className="term">
        <dt>
          {/* <span className="emoji" role="img" aria-label="Tense Biceps">
            // 💪
          </span> */}
          <Emoji emoji={props.emoji} />
          <Name name={props.name} />
        </dt>
        <dd>
          <Details detail={props.meaning} />
        </dd>
      </div>
    </div>
  );
}

export { Card };
