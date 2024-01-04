import { Splide, SplideSlide } from '@splidejs/react-splide';

// Importuj dynamicznie obrazy z folderu 'gallery'
const imageContext = require.context('../gallery', false, /\.(webp)$/);

// Pobierz nazwy wszystkich plików obrazów
const imageNames = imageContext.keys();

const SliderComponent = () => {
  return (
    <Splide aria-label="Galeria zdjęć Starego Młynu w Jarocinie"
           options={ {
            type   : 'loop',
            rewind: true,
            width : 800,
            height: 500,
            gap   : '1rem',
            perPage: 1,
            autoplay: true,
            interval: 2500,
            pauseOnHover: false
          } }
          >
      {imageNames.map((imageName, index) => {
        const imageURL = imageContext(imageName); // Pobierz pełny URL obrazu
        return (
          <SplideSlide key={index}>
            {/* Dynamiczne ładowanie obrazu z pełnym URL */}
            <img src={imageURL} alt={`Fotografia z restauracji Stary Młyn w Jarocinie ${index + 1}`} role="presentation" />
          </SplideSlide>
        );
      })}
    </Splide>
  );
};

export default SliderComponent;