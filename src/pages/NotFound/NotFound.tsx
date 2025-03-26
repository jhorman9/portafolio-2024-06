import { CSSProperties } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {

    const { width } = useWindowDimensions();
    const navigate = useNavigate();
    
    const styles: { [key: string]: CSSProperties } = {
        notFound: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: width > 991 ? 'calc(100vh - 401px)' : width > 575 ? 'calc(-428px + 100vh)' : 'auto',	
            textAlign: 'center',
            color: '#333',
            padding: '50px 0'
        },
        h1: {
            fontSize: '10rem',
            margin: '0',
            color: '#ffffff',
            lineHeight: '1',
        },
        h2: {
            fontSize: '2rem',
            margin: '0',
            color: '#ffffff',
        },
        p: {
            fontSize: '1.5rem',
            color: '#ffffff',
        }
    };

  return (
    <div className="not-found-container">
        <button className="btn-primary" onClick={() => navigate("/projects")}>Atrás</button>
        <div className="not-found" style={styles.notFound}>
            <div className="container">
                <h1 style={styles.h1}>404</h1>
                <h2 style={styles.h2}>Página no encontrada</h2>
                <p style={styles.p}>La página que buscas no existe o ha sido eliminada.</p>
            </div>
        </div>
    </div>
  )
}
