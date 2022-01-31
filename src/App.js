import React, { Component } from "react";
import SpeechRecognition from "react-speech-recognition";
import Microfon from "./img/microfon.png"
import NoMicrofon from "./img/nomicrofon.png"
import "./index.css"

const options = {
  autoStart: false,
  continous: false
};

class Dictaphone extends Component {
  render() {
    const {
      listening,
      transcript,
      interimTranscript,
      browserSupportsSpeechRecognition
    } = this.props;

    const handleListen = event => {
      this.props.startListening();
      if (listening) {
        this.props.abortListening();
      }
      event.target.classList.toggle("record");
    };

    const resetListen = () => {
      this.props.resetTranscript();
    };

    if (!browserSupportsSpeechRecognition) {
      return null;
    }

    return (
      <div className="container">
        <div className="wrapper">
          <button className="button start" onClick={handleListen} > <img  src={Microfon} alt="microfon"/> </button>
          <button className="button reset" onClick={resetListen} > <img  src={NoMicrofon} alt="microfon"/> </button>
          <div id="interim" className="interim">
            {interimTranscript}
          </div>
          <div id="final" className="final">
            {transcript}
          </div>
        </div>
        <p>Note: This Voice Recognition only supports Google Chrome.</p>
      </div>
    );
  }
}

export default SpeechRecognition(options)(Dictaphone);
