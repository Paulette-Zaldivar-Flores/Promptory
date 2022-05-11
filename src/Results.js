import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <h2>{props.results.word}</h2>
        {props.results.phonetics
          .filter(function (phonetic) {
            return phonetic.audio;
          })
          .map(function (phonetics, index) {
            return (
              <div key={index}>
                <Phonetics phonetics={phonetics} />
              </div>
            );
          })}

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
