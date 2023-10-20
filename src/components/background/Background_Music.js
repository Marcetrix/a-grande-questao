import Sound from 'react-sound'
import Test from '../resources/sounds/test.mp3'
import React, {Component} from 'react';

const playStatus = Sound.status.PLAYING

class BackgroundMusic extends Component {

  constructor(props) {
    super(props);
    this.playStatus = playStatus;
  }

    render () {
  return (
      <Sound
        url={Test}
        playStatus={playStatus}
        playFromPosition={300}
        volume={25}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
        loop={true}
      />
  );
    }
}

export default BackgroundMusic;
