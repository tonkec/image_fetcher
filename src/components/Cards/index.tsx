import { useEffect, useState } from 'react';
import { getAllImages } from '../../services/api';
import { ImageModel } from '../../models/Image';
import Card from './../Card';
import { Masonry } from 'react-plock';

import './Cards.scss';
const Cards = () => {
  const [images, setImages] = useState<ImageModel[]>([]);
  useEffect(() => {
    const getAllCardsFromApi = async () => {
      const response = await getAllImages();
      const allImages = response.map((res) => res.data);
      setImages(allImages);
    };
    getAllCardsFromApi();
  }, [setImages]);
  return (
    <div>
      <Masonry
        items={images}
        config={{
          columns: [1, 2, 3],
          gap: [24, 12, 6],
          media: [640, 768, 1024],
        }}
        render={(item, idx) => <Card key={idx} image={item} />}
      />
      {/* {images.length > 0 ? (
        images.map((image) => )
      ) : (
        <p> No images here</p>
      )} */}
    </div>
  );
};

export default Cards;
