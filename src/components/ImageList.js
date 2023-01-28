import './ImageList.css';
import { Component } from 'react';
import ImageCard from './ImageCard';

class ImageList extends Component {
  renderedImages = () => {
    const images = this.props.images.map((image) => {
      return <ImageCard key={image.id} image={image} />;
    });

    return images;
  };

  render() {
    return <div className="image-list">{this.renderedImages()}</div>;
  }
}

export default ImageList;
