import React from 'react';

export class Video extends React.Component {
  render() {

    return (
       // Use the src from props for the video source
      <div>
        <video  src={this.props.src} controls autostart autoPlay muted />
      </div>
    );
  }
}
export default Video;