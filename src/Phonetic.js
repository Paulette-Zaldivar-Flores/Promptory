import React from "react";
import "./Phonetic.css";
import ReactAudioPlayer from "react-audio-player";

const Phonetics = (props) => {
  if (props.phonetic && props.phonetic.audio) {
    return (
      <div className="Phonetics">
        <span className="phonetic-text"> {props.phonetic.text} </span>
        <br />
        <div className="player">
          <ReactAudioPlayer src={props.phonetic.audio} controls />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Phonetics;
