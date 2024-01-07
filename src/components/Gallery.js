import '@splidejs/react-splide/css';
import SliderComponent from './SliderComponent';
import 'animate.css';

function Gallery() {
    return (
        <section className="gallery animate__animated animate__fadeIn">
            <SliderComponent />
        </section>
    );
}
  
export default Gallery;