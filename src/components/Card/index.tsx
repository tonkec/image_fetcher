import { useEffect, useState } from 'react';
import { ImageModel } from '../../models/Image';
import { getImage } from '../../services/api';
import './Card.scss';
interface CardProps {
  image: ImageModel;
  id: string;
}

const Card = ({ image, id }: CardProps) => {
  const [imageFromApi, setImageFromApi] = useState<ImageModel>();
  useEffect(() => {
    const getSingleImage = async () => {
      const image = await getImage(id);
      setImageFromApi(image);
    };

    getSingleImage();
  }, [id]);
  return (
    <div
      id={id}
      className="grid-item"
      style={{ backgroundImage: `url(${image.download_url})` }}
    >
      <div className="grid-item-content">
        {imageFromApi && imageFromApi.author}
      </div>
    </div>
  );
};

export default Card;
