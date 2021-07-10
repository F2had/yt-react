import { Component } from 'react';
import SearchBar from './SearchBar';
import List from './VideoList';
import yt from '../api/yt';
import VideoDetail from './VideoDetail';
export default class App extends Component {
  state = {
    videos: [],
    selectedVidoe: null,
  };


  onVideoSelect = (video) => {
    this.setState({
      selectedVidoe: video,
    });
  };

  api = async (term = 'bulidings') => {
    const respone = await yt.get('/search', {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: respone.data.items,
      selectedVidoe: respone.data.items[0],
    });
  
  };

  componentDidMount = ()=>{
    this.api('space');
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.api} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              {this.state.selectedVidoe ? (
                <VideoDetail video={this.state.selectedVidoe} />
              ) : (
                ''
              )}
            </div>
            <div className="five wide column">
              {this.state.videos.length === 0 ? (
                ''
              ) : (
                <List
                  onVideoSelect={this.onVideoSelect}
                  videos={this.state.videos}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
