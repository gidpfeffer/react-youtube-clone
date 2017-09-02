import React, { Component } from 'react';
import './App.css';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'
import * as secrets from './secrets'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null};

    // ES6 resolves { videos } to { videos: videos }
    YTSearch({key: secrets.YOUTUBE_API_KEY, term: 'surfboards'}, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]})
    });

  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <VideoDetail video={ this.state.selectedVideo } />
        <VideoList videos={ this.state.videos } />
      </div>
    );
  }
}

export default App;
