import { ImageModel } from '../../models/Image';
import './Card.scss';
interface CardProps {
  image: ImageModel;
  id: string;
}

const Card = ({ image, id }: CardProps) => {
  return (
    <div
      id={id}
      className="grid-item"
      style={{ backgroundImage: `url(${image.download_url})` }}
    >
      <p>{image && image.author}</p>
      <div className="grid-item-content">{image && image.author}</div>
    </div>
  );
};

export default Card;
