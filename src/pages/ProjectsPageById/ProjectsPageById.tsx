import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import { PorkingProjectComponent } from "../../components/ProjectByIdComponents/PorkingProjectComponent";
import { CocolpanProjectComponent } from "../../components/ProjectByIdComponents/CocolpanProjectComponent";
import { AzumiProjectComponent } from "../../components/ProjectByIdComponents/AzumiProjectComponent";
import { EcommerceProjectComponent } from "../../components/ProjectByIdComponents/EcommerceProjectComponent";
import { AikikaiProjectComponent } from "../../components/ProjectByIdComponents/AikikaiProjectComponent";
import { CodigoProjectComponent } from "../../components/ProjectByIdComponents/CodigoProjectComponent";

export const ProjectPageById = () => {
    const { id } = useParams<{ id: string }>();
    const projectId = Number(id);
    const navigate = useNavigate();

    // Definir metadatos dinámicos por proyecto
    const projectMeta = [
      {
        title: "Menú Digital - Jhorman Nieto P",
        description: "Menú digital de comida rápida, interfaz moderna, traducción en dos idiomas y optimización móvil.",
        keywords: "Menú Digital, Jhorman Nieto, Proyecto, Comida rápida, Panamá",
        image: "https://jhorman.com/assets/porkingpty-CNf9cEtv.jpg"
      },
      {
        title: "Constructora - Jhorman Nieto P",
        description: "Reestructuración web, optimización de diseño y formulario personalizado con PHP.",
        keywords: "Constructora, Jhorman Nieto, Proyecto, PHP, Panamá",
        image: "https://jhorman.com/assets/cocolpanpty-Bq2CkdgV.jpg"
      },
      {
        title: "Menú Digital Azumi - Jhorman Nieto P",
        description: "Menú organizado por categorías, experiencia intuitiva y diseño moderno adaptable.",
        keywords: "Azumi, Menú Digital, Jhorman Nieto, Proyecto, Panamá",
        image: "https://jhorman.com/assets/azumipty-CDwqZTZW.jpg"
      },
      {
        title: "E-commerce - Jhorman Nieto P",
        description: "E-commerce personalizado con WordPress, compras en línea y experiencia multilingüe.",
        keywords: "E-commerce, WordPress, Jhorman Nieto, Proyecto, Panamá",
        image: "https://jhorman.com/assets/ecommerce-C2DwJf-B.jpg"
      },
      {
        title: "Aikikai - Jhorman Nieto P",
        description: "Web gestionada con Elementor, diseño intuitivo y secciones personalizadas.",
        keywords: "Aikikai, Elementor, Jhorman Nieto, Proyecto, Panamá",
        image: "https://jhorman.com/assets/aikikaird-DdwP9lFE.jpg"
      },
      {
        title: "Código - Jhorman Nieto P",
        description: "Proyecto para reutilización de código, estructura modular y eficiente.",
        keywords: "Código, Jhorman Nieto, Proyecto, Reutilización, Panamá",
        image: "https://jhorman.com/assets/codigosdeprogramacion-Dj86MCQc.jpg"
      }
    ];

    const meta = projectMeta[projectId - 1] || {
      title: "Proyecto no encontrado - Jhorman Nieto P",
      description: "El proyecto solicitado no existe en el portafolio.",
      keywords: "Proyecto no encontrado, Jhorman Nieto, Portafolio",
      image: "https://jhorman.com/og-image.jpg"
    };

    return (
        <section className="project-father">
            <Helmet>
              <title>{meta.title}</title>
              <link rel="canonical" href={`https://jhorman.com/#/projects/${projectId}`} />
              <meta name="description" content={meta.description} />
              <meta name="keywords" content={meta.keywords} />
              <meta name="author" content="Jhorman Nieto" />
              <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
              <meta name="googlebot" content="index, follow" />
              <meta property="og:type" content="article" />
              <meta property="og:title" content={meta.title} />
              <meta property="og:description" content={meta.description} />
              <meta property="og:url" content={`https://jhorman.com/#/projects/${projectId}`} />
              <meta property="og:site_name" content="Jhorman Nieto - Portafolio" />
              <meta property="og:image" content={meta.image} />
              <meta property="og:locale" content="es_ES" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content={meta.title} />
              <meta name="twitter:description" content={meta.description} />
              <meta name="twitter:image" content={meta.image} />
              <meta name="twitter:creator" content="@jhorman" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <meta httpEquiv="content-language" content="es" />
              <meta name="geo.region" content="PA" />
              <meta name="geo.placename" content="Panamá" />
              <meta name="theme-color" content="#000000" />
              <script type="application/ld+json">
                {JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "WebPage",
                  "name": meta.title,
                  "description": meta.description,
                  "url": `https://jhorman.com/#/projects/${projectId}`,
                  "creator": {
                    "@type": "Person",
                    "name": "Jhorman Nieto",
                    "sameAs": [
                      "https://github.com/jhorman9",
                      "https://www.linkedin.com/in/jhormandev/"
                    ]
                  }
                })}
              </script>
            </Helmet>
            <div className="container">
                <button className="btn-primary" onClick={() => navigate("/projects")}>Atrás</button>
                    {
                        projectId === 1 ? (
                            <PorkingProjectComponent />
                        ) : projectId === 2 ? (
                            <CocolpanProjectComponent />
                        ) : projectId === 3 ? (
                            <AzumiProjectComponent />
                        ) : projectId === 4 ? (
                            <EcommerceProjectComponent />
                        ) : projectId === 5 ? (
                            <AikikaiProjectComponent />
                        ) : projectId === 6 ? (
                            <CodigoProjectComponent />
                        ) : ( 
                            <p>Proyecto no encontrado</p>
                        )
                    }
            </div>
        </section>
    );
}