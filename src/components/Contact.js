import fbIcon from '../img/fb.svg';
import igIcon from '../img/ig.svg';
import phoneIcon from '../img/phone.svg';
import emailIcon from '../img/email.svg';

const contacts = {
  'phone': {
    'link': 'tel:+48514006888',
    'alt': 'Zadzwoń do Nas pod numer +48514006888'
  },
  'email': {
    'link': 'mailto:biuro@starymlyn-jarocin.pl',
    'alt': 'Napisz wiadomość e-mail'
  }
}

const socials = {
  'fb': {
    'url': 'https://www.facebook.com/p/Restauracja-Stary-M%25C5%2582yn-Jarocin-100063578733848/',
    'alt': 'Stary Młyn Facebook'
  },
  'ig': {
    'url': 'https://www.instagram.com/starymlynjarocin/',
    'alt': 'Stary Młyn Instagram'
  }
}

function Contact() {
  return (
    <section className="contact">
      <div className="contact--contact-bg">
      <div className="contact--wrapper">
        <a href={contacts.phone.link} className='contact--icon'>
          <img src={phoneIcon} alt={contacts.phone.alt} className='contact--contact-img' />
        </a>
        <a href={contacts.email.link} className='contact--icon'>
          <img src={emailIcon} alt={contacts.email.alt} className='contact--contact-img' />
        </a>
      </div>
      <div className="contact--wrapper">
        <a href={socials.fb.url} className='social--icon'>
          <img src={fbIcon} alt={socials.fb.alt} className='contact--social-img' />
        </a>
        <a href={socials.ig.url} className='social--icon'>
          <img src={igIcon} alt={socials.ig.alt} className='contact--social-img' />
        </a>
      </div>
      </div>
    </section>
  );
}

export default Contact;