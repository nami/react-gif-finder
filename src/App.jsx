import React from 'react';
import SearchBar from './components/searchBar'
import Gif from './components/Gif'
import GifList from './components/GifList'
import giphy from 'giphy-api'

const GIPHY_API_KEY = 'nt4MLllrBjK5MQZx1wt1k2hDAcTmDKNc';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGif: "oJWx7MtpR2qdi"
    }
  }

  search = (queryWord) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true }).search({
      q: queryWord,
      rating: 'g',
      limit: 20
    }, (error, result) => {
      // Res contains gif data!
      this.setState({ gifs: result.data })
      });
  }

  selectGif = (id) => {
    this.setState({ selectedGif: id })
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGif}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>

    );
  }
}

export default App;
