import { useEffect, useState } from 'react';
import { getAllImages } from '../../services/api';
import { ImageModel } from '../../models/Image';
import Card from './../Card';
import './Cards.scss';
import './Button.scss';

const LIMIT = 7;

const Cards = () => {
  const [images, setImages] = useState<ImageModel[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getAllCardsFromApi = async (page: number) => {
      const response = await getAllImages(page, LIMIT);
      setImages((prevImages) => [
        ...prevImages.slice(0, (page - 1) * LIMIT),
        ...response,
      ]);
    };

    getAllCardsFromApi(page);
  }, [page]);

  const onButtonClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const generateGrid = () => {
    let grids: ImageModel[][] = [];
    for (let index = 0; index < page; index++) {
      grids.push(images.slice(index * LIMIT, (index + 1) * LIMIT));
    }
    const finalGrid = (
      <>
        <h2 className="grid-heading">Connect people & spaces</h2>
        {grids.map((images, gridIndex) => (
          <div className="container">
            <div
              key={images.map((image) => image.id).join('-')}
              className="grid-container"
            >
              {images.map((image) => (
                <Card key={image.id} image={image} id={image.id} />
              ))}
            </div>
            {gridIndex + 1 === grids.length && (
              <button className="button" onClick={onButtonClick}>
                Button
              </button>
            )}
          </div>
        ))}
      </>
    );

    return finalGrid;
  };

  return <>{images.length > 0 ? generateGrid() : <p>No images</p>}</>;
};

export default Cards;
