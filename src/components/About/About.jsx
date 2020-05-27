import React from 'react';
// import { useLoading } from '../../hooks/AuthProvider';
import githubIcon from '../../assets/profile/Github-Icon.png';
import linkedInIcon from '../../assets/profile/LinkedIn-Icon.png';
import Dakota from '../../assets/profile/Dakota.png';
import Dannie from '../../assets/profile/Dannie.jpg';
import Janelle from '../../assets/profile/Janelle.png';
import Mikey from '../../assets/profile/Mikey.png';
import Will from '../../assets/profile/Will.jpg';
import styles from './About.css';

const About = () => (
  <>
    <main>
      <div className={styles.devs}>
        <div className={styles.teamdev}>
          <a href="https://github.com/Alcherithm" target="_blank" rel="noopener noreferrer">
            <h1 className={styles.alcherithmHeader}>Alcherithm</h1>
            <img src={githubIcon} alt="github-icon" className={styles.icons}/>
          </a>
          <p className={styles.para}>Alcherithm is a project... 
            Magna et amet dolor ut accusam ut no amet sed, diam vero sit rebum erat, takimata clita at dolor aliquyam, amet consetetur dolore lorem diam at eirmod clita, takimata stet et sit et et clita eos sanctus. Ipsum sed lorem.
          </p>
                  
        </div>    
      </div>

      <div className={styles.devs}>
        <div className={styles.dev}>
          <img src={Dakota} alt="Dakota Profile Picture"/>
          <div className={styles.links}>
            <a href="https://github.com/dakotadruley" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="github-icon" className={styles.icons}/>
            </a>
            <a href="https://www.linkedin.com/in/dakota-druley/" target="_blank" rel="noopener noreferrer">
              <img src={linkedInIcon} alt="linkedin-icon" className={styles.icons}></img>
            </a>  
          </div>
          <p>DAKOTA DRULEY Et lorem ipsum tempor sit sed eirmod erat et gubergren, duo justo lorem sed no ipsum invidunt ipsum erat kasd, clita takimata diam kasd ipsum dolor sanctus nonumy, sed est ut magna magna aliquyam nonumy sanctus est et, amet et et voluptua diam clita vero sadipscing, kasd amet vero dolor.</p>
        </div>

        <div className={styles.dev}>
          <img src={Dannie} alt="Dannie Profile Picture"/>
          <div className={styles.links}>
            <a href="https://github.com/DannieSchu" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="github-icon" className={styles.icons}/>
            </a>
            <a href="https://www.linkedin.com/in/dannieschumaker/" target="_blank" rel="noopener noreferrer">
              <img src={linkedInIcon} alt="linkedin-icon" className={styles.icons}></img>
            </a>
          </div>  
          <p>DANNIE SCHUMAKER Gubergren stet sea accusam lorem no sanctus. Amet voluptua clita et nonumy lorem sanctus et, rebum lorem voluptua dolor sed rebum takimata gubergren, erat et eirmod amet dolores labore erat diam rebum, tempor ut et tempor gubergren. Diam diam magna dolor sadipscing consetetur est accusam et. Et et nonumy gubergren.</p>
        </div>

        <div className={styles.dev}>
          <img src={Janelle} alt="Janelle Profile Picture"/>
          <div className={styles.links}>
            <a href="https://github.com/janellemellor" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="github-icon" className={styles.icons}/>
            </a>
            <a href="https://www.linkedin.com/in/janellemellor/" target="_blank" rel="noopener noreferrer">
              <img src={linkedInIcon} alt="linkedin-icon" className={styles.icons}></img>
            </a>
          </div>
          <p>JANELLE MELLOR Takimata duo dolor ea et sanctus sadipscing takimata, ut et ut vero duo amet takimata. Eirmod et est sit et sed lorem clita lorem accusam, kasd invidunt no stet aliquyam diam labore ipsum, ea consetetur rebum est labore dolor sed duo, no duo stet gubergren et. No invidunt diam magna.</p>
        </div>

        <div className={styles.dev}>
          <img src={Mikey} alt="Mikey Profile Picture"/>
          <div className={styles.links}>
            <a href="https://github.com/mikeymasonic" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="github-icon" className={styles.icons}/>
            </a>
            <a href="https://www.linkedin.com/in/michaelromay/" target="_blank" rel="noopener noreferrer">
              <img src={linkedInIcon} alt="linkedin-icon" className={styles.icons}></img>
            </a> 
          </div>   
          <p>MICHAEL ROMAY is an installation artist and musician who makes weird digital visual and interactive art.  Code, music and art go hand in hand for him.  He also has a baby bird named Rico that is very sweet.</p>
        </div>

        <div className={styles.dev}>
          <img src={Will} alt="Will Profile Picture"/>
          <div className={styles.links}>
            <a href="https://github.com/Shaka2Pass" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="github-icon" className={styles.icons}/>
            </a>
            <a href="https://www.linkedin.com/in/willpiro/" target="_blank" rel="noopener noreferrer">
              <img src={linkedInIcon} alt="linkedin-icon" className={styles.icons}></img>
            </a>
          </div>
          <p>WILL PIRO Est kasd duo no stet et sanctus tempor duo duo nonumy. Nonumy tempor est stet erat et ea. Ipsum erat nonumy eirmod no ea no dolore eirmod, ipsum dolor invidunt sea at stet consetetur, diam et voluptua et et kasd, et ipsum et ea diam amet lorem tempor dolor eos,.</p>
        </div>

      </div>
    </main>
  </>
);

export default About;
