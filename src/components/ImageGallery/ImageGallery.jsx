// import PropTypes from 'prop-types';
import styles from '../styles.module.css';

const ImageGallery = ({ items, error }) => {
  //   if (items.length === 0) {
  //     return (
  //       <p className={styles.imageGalleryText}>
  //         Sorry, nothing was found for your search. Please try another request
  //       </p>
  //     );
  //   }

  const elements = items.map(({ id, webformatURL, largeImageURL }) => (
    <li key={id} className={styles.imageGalleryItem}>
      <img
        className={styles.imageGalleryItem_image}
        src={webformatURL}
        alt="foto"
      />
    </li>
  ));

  return (
    <>
      {error && <p>Error... Please, Try again...</p>}
      <ul className={styles.imageGallery}>{elements}</ul>
    </>
  );
};

export default ImageGallery;

ImageGallery.defaultProprs = {
  items: [],
};

// ImageGallery.propTypes = {
//     items: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.number.isRequired,
//       })
//     ),
//     deleteContact: PropTypes.func.isRequired,
//   };
