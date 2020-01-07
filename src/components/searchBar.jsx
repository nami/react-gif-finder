import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "puppy" }
  }

  query = (e) => {
    this.setState({term: e.target.value})
    this.props.search(this.state.term)
  }

  render() {
    return (
      <div>
        <input type="text" className="form-control form-search" placeholder="Type here to search for gifs..." value={this.state.term} onChange={this.query} onLoad={this.props.search(this.state.term)} ></input>
      </div>

    );
  }
}

export default SearchBar;
