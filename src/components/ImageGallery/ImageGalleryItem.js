import React, { Component } from "react";
import styles from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem (onOpen, images) {
  
  const handleImageClick = (event) => {
  const id = event.currentTarget.id;
  onOpen(id);
  };

  return (<>
         {this.props.images.map((image) => {
          return (
            <li
              key={image.id}
              id={image.id}
              className={styles.gallery_item}
              onClick={this.handleImageClick}
            >
              <img
                src={image.webformatURL}
                alt={image.tags}
                className={styles.item_image}
              />
            </li>
          );
        })}
      </>)
  
}
// export default class ImageGalleryItem extends Component {
//   handleImageClick = (event) => {
//     const id = event.currentTarget.id;
//     this.props.onOpen(id);
//   };

//   render() {
//     return (
//       <>
//         {this.props.images.map((image) => {
//           return (
//             <li
//               key={image.id}
//               id={image.id}
//               className={styles.gallery_item}
//               onClick={this.handleImageClick}
//             >
//               <img
//                 src={image.webformatURL}
//                 alt={image.tags}
//                 className={styles.item_image}
//               />
//             </li>
//           );
//         })}
//       </>
//     );
//   }
// }
