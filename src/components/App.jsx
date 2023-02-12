import { Component } from 'react';
import axios from 'axios';

import styles from "./styles.module.css";

export class App extends Component {
state = {
  items: [],
  loading: false,
}

componentDidMount() {
  const API_KEY = "32163007-39541f17b63243672bcfecf36"
  const URL = `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`

  this.setState({loading: true})

  axios.get(URL)
  .then(({data})=> {
    this.setState({items: data.hits, loading: false})
  })

}

componentDidUpdate() {

}


  render() {   

    const {items, loading } = this.state;
    const elements = items.map(({id, webformatURL, largeImageURL}) => 
    <li key={id} className={styles.imageGalleryItem}>
    <img className={styles.imageGalleryItem_image} src={webformatURL} alt="foto" />
  </li>)

    return (
      <>
        <header className={styles.searchbar}>
          <form className={styles.searchForm}>
            <button type="submit" className={styles.searchForm_button}>
              <span className={styles.searchForm_button_label}>Search</span>
            </button>

            <input
              className={styles.searchForm_input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>

        <ul className={styles.imageGallery}>
          {loading && <p>...loading images</p>}
          {elements}
        </ul>

        <button className={styles.button_load_more}>Load More</button>

        <div className={styles.overlay_hidden}>
          <div className={styles.modal}>
            <img src="" alt="" />
          </div>
        </div>
      </>
    );
  }
}
