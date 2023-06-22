function ImageGalleryItem({ image, onOpen }) {
  return (
    <li className="ImageGalleryItem" onClick={() => onOpen(image)}>
      <img src={image.webformatURL} alt="" className="ImageGalleryItem-image" />
    </li>
  );
}

export default ImageGalleryItem;
