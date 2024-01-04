import logo from '../img/logo.webp';

function Header() {
    return (
        <header className="header">
            <a href='/' className='header--logo-wrapper'>
                <img src={logo} alt="Logotyp Restauracja Stary Młyn" className="header--logo"/>
            </a>
            <h1 className="header--title">Restauracja Stary Młyn</h1>
        </header>
    );
}
  
export default Header;