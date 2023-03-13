import { ImageModel } from '../../models/Image';

interface CardProps {
  image: ImageModel;
}

const Card = ({ image }: CardProps) => {
  return (
    <div>
      <img
        src={image.download_url}
        width={image.width / 10}
        height={image.height / 10}
        alt="beautiful thing"
      />
    </div>
  );
};

export default Card;
