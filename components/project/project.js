import Link from 'next/link'
import projectStyles from './project.module.scss'
import ScrollAnimation from 'react-animate-on-scroll';

const Project = (project) => {
    return (
        <ScrollAnimation animateIn="fadeIn">
            <div className='project'>
                <div className="container">
                    <div className="description">
                        <h3>
                            {project.title}
                        </h3>
                        <p>
                            {project.description}
                        </p>

                        {project.tech ? ( 
                            <p className='tech'>
                                {project.tech}
                            </p>
                            
                        ) : ('')}  

                        {project.previewlink ? ( 
                            <a href={project.previewlink} target="_blank" rel="nofollow">
                                Preview
                            </a>
                        ) : ('')} 

                        {project.github ? ( 
                            <a href={project.github} target="_blank" rel="nofollow">
                                Github
                            </a>
                        ) : ('')}
                        
                        
                    </div>
                </div>
            </div>
        </ScrollAnimation>
    );
}

export default Project;