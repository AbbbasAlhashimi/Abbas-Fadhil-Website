import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import krkhukuk from '../../assets/KRK Hukuk Project.png';
import sedoiraq from '../../assets/SEDO - IRAQ Project.png';
import advoice from '../../assets/Ad Voice Project.png';
import wazzupwith from '../../assets/WazzUpWith Project.png';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>

        <ProjectCard src={krkhukuk}
        link={'https://krkhukuk.com/'}
        h3={'KRK Hukuk'}
        p={'Turkish Lawyer Attorny'}
        />

        <ProjectCard src={sedoiraq}
          link={'https://sedoiraq.org/'}
          h3={'SEDO IRAQ'}
          p={'Noprofit Organization'}
          />

        <ProjectCard src={wazzupwith}
          link={'https://wazzupwith.org/'}
          h3={'Wazz Up With'}
          p={'Digital Marketing Agency'}
          />

        <ProjectCard src={advoice}
          link={'https://the-advoice.com/'}
          h3={'Ad Voice'}
          p={'Digital Marketing Agency'}
          />
       
        </div>
    </section>
  )
}

export default Projects