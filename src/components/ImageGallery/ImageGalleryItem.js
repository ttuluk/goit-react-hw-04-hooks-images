import React from "react";
import styles from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem ({onOpen, images}) {
  
  const handleImageClick = (event) => {
  const id = event.currentTarget.id;
  onOpen(id);
  };

  return (<>
    {images.map((image) => {
      return (
        <li
          key={image.id}
          id={image.id}
          className={styles.gallery_item}
          onClick={handleImageClick}
        >
          <img
            src={image.webformatURL}
            alt={image.tags}
            className={styles.item_image}
          />
        </li>
      );
    })}
  </>);
};
