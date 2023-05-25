import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from "./Searchbar/Searchbar";
import { PixabayApi } from "./Fetch/fetchApi";

const pixabayApi = new PixabayApi();

export class App extends Component {
  state = {
    imageName: '',
    loading: false,
  };
 
  componentDidUpdate(_, prevState) {
    console.log(this.state.imageName);

    if (prevState.imageName !== this.state.imageName) {

      this.setState({ loadig: true });
      setTimeout(()=>{ pixabayApi.q = this.state.imageName;
          pixabayApi.fetchFotos()
        .finally(()=> this.setState({ loading: false }));},5000)
     
    }
  }

  handleFormSubmit = searchImage => {
    this.setState({ imageName: searchImage});
  }

  render() {
    return (
      <div>
        
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.loading && <div>Загружаємо...</div>}
        <ToastContainer
          position="top-center"
          autoClose={3000} />
    </div>
  );
  }
}
