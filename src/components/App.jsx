import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { PixabayApi } from './Fetch/fetchApi';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMore } from './Button/Button';


const pixabayApi = new PixabayApi();

export class App extends Component {
  state = {
    images: "",
    isLoading: false,
    galleryImages: [],
    allImages: null,
    error: null,
    totalPage: null,
  };
 
  componentDidUpdate(_, prevState) {
       if (prevState.images !== this.state.images || prevState.totalPage !== pixabayApi.page) {

      this.setState({ isLoadig: true});
      pixabayApi.q = this.state.images;
      
        pixabayApi.fetchFotos()
        .then(({ data: {hits, totalHits} }) => {
            const imagesArray = hits.map(({id,  webformatURL, largeImageURL}) => ({
             id,
             webformatURL,
             largeImageURL
             }))

             return this.setState({
               galleryImages: [...prevState.galleryImages, ...imagesArray ],
               allImages: totalHits
             })
           })
        .catch(error => this.setState({error}))
        .finally( this.setState({isLoading: false,}))
    }
    const totalPage = Math.ceil(this.state.allImages / pixabayApi.per_page);
     this.setState({totalPage})

    // if (totalPage !== pixabayApi.page) {
    //   pixabayApi.fetchFotos()
    //     .then(({ data: {hits} }) => {
    //         const imagesArray = hits.map(({id,  webformatURL, largeImageURL}) => ({
    //          id,
    //          webformatURL,
    //          largeImageURL
    //          }))

    //          return this.setState(prevState => ({
    //            galleryImages: [...prevState.galleryImages, ...imagesArray ]
               
    //          }))
    //        })
    //     .catch(error => this.setState({error}))
    //     .finally( this.setState({isLoading: false,}))

    // }
  }

  handleLoadMore = () => {
    pixabayApi.page += 1;
    console.log(pixabayApi.page);
  }

  handleFormSubmit = searchImage => {
    this.setState({ images: searchImage });
    
  };

  render() {
    return (
      <div>
        
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.isLoading && <p>Loading...</p>}
        {this.state.galleryImages && <ImageGallery foundImages={this.state.galleryImages} />}
        {this.state.allImages > 12 && <LoadMore onClick={this.handleLoadMore} />}
        <ToastContainer
          position="top-center"
          autoClose={3000} />
    </div>
  );
  }
}
