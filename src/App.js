import _ from 'lodash';
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

    this.videoSearch('surfing');

  }

  videoSearch(term){
    // ES6 resolves { videos } to { videos: videos }
    YTSearch({key: secrets.YOUTUBE_API_KEY, term: term}, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]})
    });
  }

  render() {
    //throttles user searches
    const bufferedVideoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

    return (
      <div className="App">
        <SearchBar onSearch={bufferedVideoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
      </div>
    );
  }
}

export default App;
