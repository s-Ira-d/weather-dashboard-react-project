import { useEffect, useState } from "react";
import { Section, Title, Slider, Image } from "./Gallery.styled";

const API_KEY = "56277476-94ecaf795ccb119cb9337929d";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(2);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch(
          `https://pixabay.com/api/?key=${API_KEY}&q=nature&image_type=photo&per_page=20`,
        );

        const data = await res.json();

        if (data.hits) {
          setImages(data.hits);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchImages();
  }, []);

  if (images.length < 5) return null;

  const start = Math.max(0, currentIndex - 2);
  const end = Math.min(images.length, currentIndex + 3);

  const visibleImages = images.slice(start, end);

  return (
    <Section>
      <Title>Beautiful nature</Title>

      <Slider>
        {visibleImages.map((image) => {
          const realIndex = images.findIndex((img) => img.id === image.id);

          return (
            <Image
              key={image.id}
              src={image.largeImageURL}
              alt="nature"
              $active={realIndex === currentIndex}
              onClick={() => setCurrentIndex(realIndex)}
            />
          );
        })}
      </Slider>
    </Section>
  );
};

export default Gallery;
