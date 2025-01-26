import { Helmet } from 'react-helmet-async';
import '../../styles/Contact.css';

export const ContactPages = () => {
  return (
    <>
    <Helmet>
      <title>Contacto - Jhorman Nieto P</title> 
      <link rel="canonical" href={"https://localhost:5173"} />
      <meta name="description" content="Jhorman Nieto - Desarrollador Full Stack con experiencia en HTML, CSS, JavaScript, ReactJS, Redux, Bootstrap, Node.js, Express, Sequelize, PostgresSQL y WordPress." />
      <meta name="keywords" content="Desarrollador Full Stack, HTML, CSS, JavaScript, ReactJS, Redux, Bootstrap, Node.js, Express, Sequelize, PostgresSQL, WordPress, Desarrollo Web" />
      <meta name="author" content="Jhorman Nieto" />
    </Helmet>
    <section className='contact'>
      <div className="contact-container container">
          <ul className="contact-info">
              <li className="contact-info_section">
                  <i className="fa-solid fa-location-dot"></i>
                  <p><a>Panamá, Ciudad de Panamá</a></p>
              </li>
              <li className="contact-info_section">
                <a href="tel:50765961547" className='contact-info-link'>
                  <i className="fa-solid fa-phone"></i>                
                  <span>+507 6596-1547</span>
                </a>
              </li>
              <li className="contact-info_section">
                <a href="https://www.instagram.com/jsnp97/" target='_blank' className='contact-info-link'>
                  <i className="fa-brands fa-instagram"></i>                
                  <span>Instagram</span>
                </a>
              </li>
              <li className="contact-info_section">
                <a href="https://www.linkedin.com/in/jhormandev/" target='_blank' className='contact-info-link'>
                    <i className="fa-brands fa-linkedin"></i>               
                    <span>LinkedIn</span>
                </a>
              </li>
              <li className="contact-info_section">
                <a href="https://x.com/Jhorman1D" target='_blank' className="contact-info-link">
                  <i className="fa-brands fa-x-twitter"></i>                
                  <span>X (Antiguo Twitter)</span>
                </a>
              </li>
              <li className="contact-info_section">
                <a href="https://github.com/jhorman9" target='_blank' className='contact-info-link'>
                  <i className="fa-brands fa-github"></i>                
                  <span>Github</span>
                </a>
              </li>
          </ul>
          <form className="contact-form">
            <h1>Formulario de contacto</h1>
            <p>Si deseas ponerte en contacto conmigo, por favor completa el siguiente formulario. Estaré encantado de responder a tu consulta lo antes posible.</p>
            <div className="row">
              <fieldset>
                  <label htmlFor="name">Nombre</label>
                  <input type="text" name="name" id="name" placeholder='Escribir aquí' />
              </fieldset>
              <fieldset>
                  <label htmlFor="lastname">Apellido</label>
                  <input type="text" name="lastname" id="lastname" placeholder='Escribir aquí' />
              </fieldset>
            </div>
            <div className="row">
              <fieldset>
                  <label htmlFor="title">Titulo</label>
                  <input type="text" name="title" id="title" placeholder='Escribir aquí' />
              </fieldset>
              <fieldset>
                  <label htmlFor="email">Correo electrónico</label>
                  <input type="email" name="email" id="email" placeholder='Example@gmail.com'/>
              </fieldset>
            </div>
              <fieldset className='message'>
                  <label htmlFor="message">Mensaje</label>
                  <textarea name="message" id="message"></textarea>
              </fieldset>
              <button className='btn-primary'>Enviar</button>
          </form>
      </div>
  </section>
  <iframe className='contact-iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252147.44940918102!2d-79.76497633288386!3d9.081622064859776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca8f1dbe80363%3A0xaba25df1f042c10e!2sPanama%20City%2C%20Panam%C3%A1%20Province!5e0!3m2!1sen!2spa!4v1737855478065!5m2!1sen!2spa" width="600" height="450" loading='eager'></iframe>
  </>
  )
}
