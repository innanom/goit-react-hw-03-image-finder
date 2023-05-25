import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from "./Searchbar/Searchbar";
// import { PixabayApi } from "./Fetch/fetchApi";

// const pixabayApi = new PixabayApi();

export class App extends Component {
  state = {
    imageName:''
  };
  // componentDidMount() {
  //   fetch(`https://pixabay.com/api/?q=${this.state.imageName}&page=1&key=35099720-4d8fe0d7f5adc4f66994afd08&image_type=photo&orientation=horizontal&per_page=12`)
  //     .then(res => res.json())
  //     .then(console.log);
  //   }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(this.state.imageName);

  //   if (prevProps.imageName !== this.props.imageName) {
  //     console.log(prevProps.imageName);
  //     fetch(`https://pixabay.com/api/?q=${this.props.imageName}&page=1&key=35099720-4d8fe0d7f5adc4f66994afd08&image_type=photo&orientation=horizontal&per_page=12`)
  //       .then(res => res.json())
  //       .then(console.log);
  //   }
  // }

  handleFormSubmit = searchImage => {
    this.setState({ imageName: searchImage});
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={ this.handleFormSubmit} />
        <ToastContainer
          position="top-center"
          autoClose={3000} />
    </div>
  );}
};
