function Footer() {
    
    const getYear = () => {
        const date = new Date();
        return date.getFullYear();
    }

    return (
        <footer className="footer">
           <p className="footer--text">&copy; {getYear()} Restauracja Stary Młyn w Jarocinie</p>
        </footer>
    );
}
  
export default Footer;