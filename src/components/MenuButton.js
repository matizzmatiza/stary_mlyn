import restaurantIcon from '../img/restaurant.svg'

function MenuButton() {
    return (
        <section className="menuButton">
            <a href="#pdf" className="menuButton--button">
                <img src={restaurantIcon} className='menuButton--icon' alt='Ikona Menu'/>
                <span>Sprawdź Nasze Menu</span>
                </a>
        </section>
    );
}
  
  export default MenuButton;