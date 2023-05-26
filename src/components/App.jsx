import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { PixabayApi } from './Fetch/fetchApi';
// import { ImageGallery } from './ImageGallery/ImageGallery'

const pixabayApi = new PixabayApi();

export class App extends Component {
  state = {
    images: '',
    isLoading: false,
  };
 
  componentDidUpdate(_, prevState) {
       if (prevState.images !== this.state.images) {

      // this.setState({ isLoadig: true });
      pixabayApi.q = this.state.images;
      
         pixabayApi.fetchFotos()
           .then((res) => res.json)
           .then(images => this.setState({ images }));
        // .finally(() =>  this.setState({isLoading: false,}));
      
    }
  }

  handleFormSubmit = searchImage => {
    console.log(searchImage);
    this.setState({ images: searchImage });
    // console.log(this.setState({ images }));
  };

  render() {
    return (
      <div>
        
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.isLoading && <p>Loading...</p>}
        <ToastContainer
          position="top-center"
          autoClose={3000} />
    </div>
  );
  }
}
