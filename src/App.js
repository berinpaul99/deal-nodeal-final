import React, { useState } from 'react';
import './App.css';
import Suitcase from './Suitcase'

function App() {
  const [mute, setMute] = useState(false)
  const [hidebutton, hidebuttonSet] = useState(false)


  function hideMute() {
    hidebuttonSet({ hidebutton: true })
  }

  return (
    <div className="App">
      <header>
        <img src={require('./images/titleTop.png')} alt="dealtitle" />
      </header>
      {!hidebutton && <img alt="mute" src="https://img.icons8.com/flat_round/64/000000/mute.png" id="mute" onClick={() => setMute(!mute)} />}
      <Suitcase muteAudio={mute} hideMute={hideMute} />
    </div>
  );
}

export default App;
