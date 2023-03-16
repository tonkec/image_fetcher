import { ImageModel } from '../../models/Image';
import useProgressiveImage from './lazyLoader';

import './Card.scss';
interface CardProps {
  image: ImageModel;
  id: string;
}

const Card = ({ image, id }: CardProps) => {
  const loaded = useProgressiveImage(image.download_url);
  const placeholder = require('./../../assets/images/box.png');
  return (
    <div
      id={id}
      className="grid-item"
      style={{ backgroundImage: `url(${loaded || placeholder})` }}
    >
      <p>{image && image.author}</p>
      <div className="grid-item-content">{image && image.author}</div>
    </div>
  );
};

export default Card;
