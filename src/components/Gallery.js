import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import image1 from '../gallery/1.jpg';
import image2 from '../gallery/6.jpg';

function Gallery() {
    return (
        <section className="gallery">
           <Splide aria-label="My Favorite Images"
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
                <SplideSlide>
                    <img src={image1} alt="Fotografia z restauracji Stary Młyn w Jarocinie 1"/>
                </SplideSlide>
                <SplideSlide>
                    <img src={image2} alt="Fotografia z restauracji Stary Młyn w Jarocinie 1"/>
                </SplideSlide>
            </Splide>
        </section>
    );
}
  
export default Gallery;