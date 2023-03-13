import { useEffect, useState } from 'react';
import { getAllImages } from '../../services/api';
import { ImageModel } from '../../models/Image';
import Card from './../Card';
const Cards = () => {
  const [images, setImages] = useState<ImageModel[]>([]);
  useEffect(() => {
    const getAllCardsFromApi = async () => {
      const response = await getAllImages();
      console.log(response);
      setImages(response);
    };
    getAllCardsFromApi();
  }, [setImages]);
  return (
    <div>
      {images.length > 0 ? (
        images.map((image) => <Card key={image.id} image={image} />)
      ) : (
        <p> No images here</p>
      )}
    </div>
  );
};

export default Cards;
