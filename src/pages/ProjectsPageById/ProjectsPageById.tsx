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

    return (
        <section className="project-father">
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
};