import React, { Component } from 'react';
import './App.css';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'
import * as secrets from './secrets'
import VideoList from'./components/video_list'

class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] };

    // ES6 resolves { videos } to { videos: videos }
    YTSearch({key: secrets.YOUTUBE_API_KEY, term: 'surfboards'}, videos => {
      this.setState({ videos })
    });

  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <VideoList videos={ this.state.videos } />
      </div>
    );
  }
}

export default App;
