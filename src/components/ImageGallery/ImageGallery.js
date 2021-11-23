import React, { useState, useEffect } from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import styles from "./ImageGallery.module.css";
import imageApi from "../../services/api";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import Loader from "react-loader-spinner";

export default function ImageGallery({searchName}) {
  const [imageElem, setImageElemState] = useState(null);
  const [page, setPageState] = useState(1);
  const [imageModal, setImageModalState] = useState(null);
  const [showModal, setShowModalState] = useState(false);
  const [loading, setLoadinghName] = useState(false);
  
 
  useEffect(() => {
    if (!searchName) {
      return;
    }
    setLoadinghName(true);
    imageApi
       .fetchImage(searchName, page)
        .then((imageElem) => setImageElemState(imageElem.hits))
        .catch((error) => console.log(error)).finally(()=>setLoadinghName((prevLoad=>!prevLoad)));
  }, [searchName, page]);


  const handleLoad = () => {
    setPageState((prevPage) => prevPage + 1 );
  };

  const toggleModal = () => {
    setShowModalState( !showModal );
  };

 const openModal = (imageId) => {
    const imageModal =imageElem.find((image) => {
      return image.id.toString() === imageId;
    });
   setShowModalState(!showModal);
   setImageModalState(imageModal.largeImageURL);
  };

  return (
    <>
      {loading && (
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={80}
            width={80}
            timeout={3000}
        />
        )}
        <ul className={styles.gallery}>
          {imageElem && (
            <ImageGalleryItem images={imageElem} onOpen={openModal} />
          )}
        </ul>
        {showModal && (
          <Modal onClose={toggleModal} >
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
};
