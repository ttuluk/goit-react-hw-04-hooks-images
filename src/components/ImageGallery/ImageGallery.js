import React, { useState } from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import styles from "./ImageGallery.module.css";
import imageApi from "../../services/api";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

export default function ImageGallery({openModal}) {
  const [imageElem, setImageElemState] = useState(null);
  const [page, setPageState] = useState(1);
  const [imageModal, setImageModalState] = useState(null);
  const [showModal, setShowModalState] = useState(false);

  handleLoad = () => {
    setPageState(prevState => prevState + 1 );
  };

  toggleModal = () => {
    setShowModalState( !showModal );
  };

  openModal = (imageId) => {
    const imageModal = this.state.imageElem.find((image) => {
      return image.id.toString() === imageId;
    });

    this.setState((state) => ({
      showModal: !state.showModal,
      imageModal: imageModal.largeImageURL,
    }));
  };

  return (
      <>
        <ul className={styles.gallery}>
          {imageElem && (
            <ImageGalleryItem images={imageElem} onOpen={this.openModal} />
          )}
        </ul>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img
              src={imageModal}
              alt={imageElem.tags}
              className={styles.modal_image}
            ></img>
          </Modal>
        )}
        {imageElem && (
          <Button onClickLoad={handleLoad} title={"Load more"} />
        )}
      </>
    ); 
}
// class ImageGallery extends Component {
//   state = {
//     imageElem: null,
//     showModal: false,
//     imageModal: null,
//     page: 1,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const prevName = prevProps.searchName;
//     const nextName = this.props.searchName;
//     const pageNumber = this.state.page;
//     const prevPage = prevState.page;

//     if (prevName !== nextName || prevPage !== pageNumber) {
//       imageApi
//         .fetchImage(nextName, pageNumber)
//         .then((imageElem) => this.setState({ imageElem: imageElem.hits }))
//         .catch((error) => console.log(error));
//     }
//   }

//   toggleModal = () => {
//     this.setState((state) => ({ showModal: !state.showModal }));
//   };

//   openModal = (imageId) => {
//     const imageModal = this.state.imageElem.find((image) => {
//       return image.id.toString() === imageId;
//     });

//     this.setState((state) => ({
//       showModal: !state.showModal,
//       imageModal: imageModal.largeImageURL,
//     }));
//   };

//   handleLoad = () => {
//     this.setState((prevState) => {
//       return { page: prevState.page + 1 };
//     });
//   };

//   render() {
//     const { imageElem, showModal, imageModal, loading } = this.state;
//     return (
//       <>
//         <ul className={styles.gallery}>
//           {imageElem && (
//             <ImageGalleryItem images={imageElem} onOpen={this.openModal} />
//           )}
//         </ul>
//         {showModal && (
//           <Modal onClose={this.toggleModal}>
//             <img
//               src={imageModal}
//               alt={imageElem.tags}
//               className={styles.modal_image}
//             ></img>
//           </Modal>
//         )}
//         {imageElem && (
//           <Button onClickLoad={this.handleLoad} title={"Load more"} />
//         )}
//       </>
//     );
//   }
// }

// export { ImageGallery };
