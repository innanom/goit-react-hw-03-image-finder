import React, { Component } from 'react';
// import css from './App.module.css';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from '../Searchbar/Searchbar';
import { PixabayApi } from '../Fetch/fetchApi';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { LoadMore } from '../Button/Button';
import { Loader } from '../Loader/Loader';
import { Modal } from '../Modal/Modal'


const pixabayApi = new PixabayApi();

export class App extends Component {
  state = {
    images: "",
    isLoading: false,
    galleryImages: [],
    allImages: null,
    error: null,
    page: 1,
    showModal: false,
  };
 
  componentDidUpdate(_, prevState) {
    // const { images, page } = this.state;
       if (prevState.images !== this.state.images || prevState.page !== this.state.page) {

      this.setState({ isLoadig: true});
         pixabayApi.q = this.state.images;
         pixabayApi.page = this.state.page;
      
        pixabayApi.fetchFotos()
        .then(({ data: {hits, totalHits} }) => {
            const imagesArray = hits.map(({id,  webformatURL, largeImageURL}) => ({
             id,
             webformatURL,
             largeImageURL
             }))

             return this.setState({
               galleryImages: [...prevState.galleryImages, ...imagesArray],
               allImages: totalHits
             })
           })
        .catch(error => this.setState({error}))
        .finally( this.setState({isLoading: false,}))
    }
    

    }

  handleLoadMore = () => {
    this.setState({page: pixabayApi.page += 1})
    
  }

  handleFormSubmit = searchImage => {
    this.setState({ images: searchImage });
    
  };

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal
    }))
  }

  render() {

    const totalPage = Math.ceil(this.state.allImages / pixabayApi.per_page);
    
    const { isLoading, galleryImages, page, showModal } = this.state;

    return (
      <div>
        {showModal && <Modal/>}
        <Searchbar onSubmit={this.handleFormSubmit} />
        {isLoading && <Loader/>}
        {galleryImages && <ImageGallery foundImages={galleryImages} openModal={this.toggleModal} />}
        {totalPage > page && <LoadMore onClick={this.handleLoadMore} />}
        <ToastContainer
          position="top-center"
          autoClose={3000} />
    </div>
  );
  }
}
