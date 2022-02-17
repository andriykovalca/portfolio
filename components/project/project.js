import Link from 'next/link'
import projectStyles from './project.module.scss'

const Project = (project) => {
    return (
        <div className={projectStyles.project}>
            <div className="container">
                <div className="description">
                    <h3>
                        {project.title}
                    </h3>
                    <p>
                        {project.description}
                    </p>

                    <a href={project.github}>
                        Github
                    </a>
                    <a href={project.previewlink}>
                        Preview
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project;