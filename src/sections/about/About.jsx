import AboutImage from '../../assests/about.jpg'
import CV from '../../assests/cv.pdf'
import {ImCloudDownload} from 'react-icons/im'
import data from './data'
import Card from '../../components/Card'

import './about.css'

const About = () => {
  return (
    <section id='about'>
      <div className='container about__container'>
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt='About Image' />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className='about__cards'>
            {
              data.map(item => (
                <Card key={item.id} className="about__card">
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
          <p>Welcome to my portfolio website! I'm <b><i>Dharshini</i></b>, a passionate and blossoming software engineer. With a strong background 
            in Information Technology, I strive to create impactful projects, designs, or solutions that blend creativity and functionality.</p>
            <p>
            I am driven by a deep curiosity and a constant desire to learn and grow. Whether it's exploring emerging trends or staying up-to-date with 
            the latest advancements in my field, I am committed to continuous improvement. This mindset allows me to adapt to evolving landscapes and 
            deliver innovative solutions that exceed expectations.
            </p>
            <a href={CV} download className='btn primary'>Download CV<ImCloudDownload/></a>
        </div>
      </div>
  
    </section>
  )
}

export default About
