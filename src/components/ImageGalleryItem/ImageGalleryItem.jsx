import { GalletyItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onClickShowImg,
}) => (
  <GalletyItem data-img={largeImageURL} onClick={onClickShowImg}>
    <img src={webformatURL} alt={tags} />
  </GalletyItem>
);
