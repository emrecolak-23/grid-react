import unsplash from './api/unsplash';
import { Component } from 'react';

import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

class App extends Component {
  state = { images: [] };

  onSubmitForm = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSubmitForm} />
        Found: {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
