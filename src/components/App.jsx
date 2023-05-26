import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { PixabayApi } from './Fetch/fetchApi';
import { ImageGallery } from './ImageGallery/ImageGallery';


const pixabayApi = new PixabayApi();

export class App extends Component {
  state = {
    images: "",
    isLoading: false,
    galleryImages: [],
    allImages:null,
  };
 
  componentDidUpdate(_, prevState) {
       if (prevState.images !== this.state.images) {

      this.setState({ isLoadig: true });
      pixabayApi.q = this.state.images;
         console.log(pixabayApi.fetchFotos());
         pixabayApi.fetchFotos()
           .then(({ data: {hits, totalHits} }) => {
             console.log(hits);
             const imagesArray = hits.map(({id,  webformatURL, largeImageURL}) => ({
             id,
             webformatURL,
             largeImageURL
             }))

             return this.setState({
               galleryImages: imagesArray,
               allImages: totalHits
             }
             )
           })
           .then(console.log(this.allImages))
         .finally( this.setState({isLoading: false,}))
    }
  }

  handleFormSubmit = searchImage => {
    this.setState({ images: searchImage });
    
  };

  render() {
    return (
      <div>
        
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.isLoading && <p>Loading...</p>}
        {this.state.galleryImages && <ImageGallery foundImages={this.state.galleryImages } />}
        <ToastContainer
          position="top-center"
          autoClose={3000} />
    </div>
  );
  }
}
