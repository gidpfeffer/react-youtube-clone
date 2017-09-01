import React, { Component } from 'react';
import './App.css';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'
import * as secrets from './secrets'

YTSearch({key: secrets.YOUTUBE_API_KEY, term: 'surfboards'}, function(data){
	console.log(data);
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App;
