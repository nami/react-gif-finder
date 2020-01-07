import React from 'react';

class Gif extends React.Component {

  handleClick = () => {
    if (this.props.selectGif){
      this.props.selectGif(this.props.id)
    }
  }

  render() {
    const url = `https://media.giphy.com/media/${this.props.id}/giphy.gif`

    return (
      <div className="gif" onClick={this.handleClick}>
        <img src={url} alt=""/>
      </div>

    );
  }
}

export default Gif;
