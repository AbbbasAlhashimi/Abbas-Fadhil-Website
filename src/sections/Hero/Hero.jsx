import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Website-Personal-Image.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Abbas Fadhil-Resume-UK.pdf';
import { useTheme } from '../../common/ThemeContext';


function Hero() {
    //Switching The Theme color state Light/Dark
    const { theme, toggleTheme } = useTheme();

    //Switching images based on the selected Theme State 
    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    //Hero Section
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className= {styles.hero}
            src={heroImg}
            alt='Profile Picture of Abbas Fadhil
            '/>

            <img className={styles.colorMode}
            src={themeIcon}
            alt='Color mode icon'
            onClick={toggleTheme}
            />
        </div>

        <div className={styles.info}>
            <h1>Abbas Fadhil</h1>
            <h2>Frontend Developer</h2>
            <span>
                <a className='icon-logo' href='https:/twitter.com/' target='_blank'>
                    <img src={twitterIcon} alt='Twitter Icon' />
                </a>

                <a className='icon-logo' href='https:/github.com/' target='_blank'>
                    <img src={githubIcon} alt='github Icon' />
                </a>

                <a className='icon-logo' href='https:/linkedin.com/' target='_blank'>
                    <img src={linkedinIcon} alt='linkedin Icon' />
                </a>
            </span>
            <p className={styles.desciption}>With a passion for developing React Web Apps for commercial businesses.</p>

            <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;