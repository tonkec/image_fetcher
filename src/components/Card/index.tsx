import { ImageModel } from '../../models/Image';
import './Card.scss';
interface CardProps {
  image: ImageModel;
}

const Card = ({ image }: CardProps) => {
  return (
    <img
      src={image.download_url}
      style={{ width: '100%', height: 'auto' }}
      alt="Beauty"
      className="card"
    />
  );
};

export default Card;
