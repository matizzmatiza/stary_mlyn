import restaurantIcon from '../img/restaurant.svg';
import 'animate.css';

function MenuButton() {
  return (
    <section className="menuButton animate__animated animate__jackInTheBox">
      <a href="#pdf" className="menuButton--button">
        <img src={restaurantIcon} className='menuButton--icon' alt='Ikona Menu' />
        <span>Sprawdź Nasze Menu</span>
      </a>
    </section>
  );
}

export default MenuButton;
