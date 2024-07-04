export const ContactPages = () => {
  return (
    <section className='contact'>
        <h1>Formulario de contacto</h1>
      <div className="contact-container container">
          <ul className="contact-info">
              <li className="contact-info_section">
                  <i className="fa-solid fa-location-dot"></i>
                  <p><a>Panamá, Ciudad de Panamá</a></p>
              </li>
              <li className="contact-info_section">
                  <i className="fa-solid fa-phone"></i>                
                  <p><a href="tel:50765961547">+507 6596-1547</a></p>
              </li>
              <li className="contact-info_section">
                  <i className="fa-solid fa-envelope"></i>                
                  <p><a href="mailto:Jhorman_nieto97@hotmail.com">Jhorman_nieto97@hotmail.com</a></p>
              </li>
          </ul>
          <form className="contact-form">
              <fieldset>
                  <label htmlFor="name">Nombre</label>
                  <input type="text" name="name" id="name" />
              </fieldset>
              <fieldset>
                  <label htmlFor="title">Titulo</label>
                  <input type="text" name="title" id="title" />
              </fieldset>
              <fieldset>
                  <label htmlFor="email">Correo electrónico</label>
                  <input type="email" name="email" id="email" />
              </fieldset>
              <fieldset>
                  <label htmlFor="message">Mensaje</label>
                  <textarea name="message" id="message"></textarea>
              </fieldset>
              <button>Enviar</button>
          </form>
      </div>
  </section>
  )
}
