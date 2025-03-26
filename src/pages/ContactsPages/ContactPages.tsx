import { useState, useRef, FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import "../../styles/Contact.css";

// Definir tipos para el estado de la respuesta del servidor
interface ResponseResult {
  success: boolean;
}

export const ContactPages = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    if (formRef.current) {
      const formData = new FormData(formRef.current);

      try {
        const response = await fetch("https://jhorman.com/contact.php", {
          method: "POST",
          body: formData,
          headers: {
            "Accept": "application/json",
          },
        });

        if (!response.ok) throw new Error("Error en el servidor");

        const result: ResponseResult = await response.json();

        if (result.success) {
          setMessage("✅ Mensaje enviado con éxito");
          formRef.current.reset(); // Limpia el formulario
        } else {
          setMessage("❌ Error al enviar el mensaje. Inténtalo de nuevo.");
        }
      } catch (error) {
        const errorMessage = (error as Error).message || "Error en la conexión con el servidor";
        setMessage(`❌ ${errorMessage}`);
      }

      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contacto - Jhorman Nieto P</title>
        <link rel="canonical" href="https://jhorman.com/contact" />
        <meta name="description" content="Jhorman Nieto - Desarrollador Full Stack..." />
        <meta name="keywords" content="Desarrollador Full Stack, HTML, CSS, JavaScript..." />
        <meta name="author" content="Jhorman Nieto" />
      </Helmet>

      <section className="contact">
        <div className="contact-container container">
        <ul className="contact-info">
          <li className="contact-info_section"><i className="fa-solid fa-location-dot"></i><p><a>Panamá, Ciudad de Panamá</a></p></li>
          <li className="contact-info_section"><a href="tel:50765961547" className="contact-info-link"><i className="fa-solid fa-phone"></i><span>+507 6596-1547</span></a></li>
          <li className="contact-info_section"><a href="https://www.instagram.com/jsnp97/" target="_blank" className="contact-info-link"><i className="fa-brands fa-instagram"></i><span>Instagram</span></a></li>
          <li className="contact-info_section"><a href="https://www.linkedin.com/in/jhormandev/" target="_blank" className="contact-info-link"><i className="fa-brands fa-linkedin"></i><span>LinkedIn</span></a></li>
          <li className="contact-info_section"><a href="https://x.com/Jhorman1D" target="_blank" className="contact-info-link"><i className="fa-brands fa-x-twitter"></i><span>X (Antiguo Twitter)</span></a></li>
          <li className="contact-info_section"><a href="https://github.com/jhorman9" target="_blank" className="contact-info-link"><i className="fa-brands fa-github"></i><span>Github</span></a></li>
        </ul>

          <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
            <h1>Formulario de contacto</h1>
            <p>Si deseas ponerte en contacto conmigo, completa el siguiente formulario.</p>

            <div className="row">
              <fieldset>
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" id="name" placeholder="Escribir aquí" required />
              </fieldset>
              <fieldset>
                <label htmlFor="lastname">Apellido</label>
                <input type="text" name="lastname" id="lastname" placeholder="Escribir aquí" required />
              </fieldset>
            </div>

            <div className="row">
              <fieldset>
                <label htmlFor="title">Título</label>
                <input type="text" name="title" id="title" placeholder="Escribir aquí" />
              </fieldset>
              <fieldset>
                <label htmlFor="email">Correo electrónico</label>
                <input type="email" name="email" id="email" placeholder="Example@gmail.com" required />
              </fieldset>
            </div>

            <fieldset className="message">
              <label htmlFor="message">Mensaje</label>
              <textarea name="message" id="message" required></textarea>
            </fieldset>

            <button className="btn-primary" type="submit" disabled={loading} aria-label="Enviar mensaje">
              {loading ? "Enviando..." : "Enviar"}
            </button>

            {message && <p className="status-message" aria-live="polite">{message}</p>}
          </form>
        </div>
      </section>
    </>
  );
};
