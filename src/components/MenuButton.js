import restaurantIcon from '../img/restaurant.svg';
import 'animate.css';
import MenuPDF from '../pdf/StaryMlynJarocinMenu.pdf';

function MenuButton() {
  return (
    <section className="menuButton animate__animated animate__jackInTheBox">
      <a href={MenuPDF} className="menuButton--button">
        <img src={restaurantIcon} className='menuButton--icon' alt='Ikona Menu' />
        <span>Sprawdź Nasze Menu</span>
      </a>
    </section>
  );
}

export default MenuButton;
