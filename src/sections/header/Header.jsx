import HeaderImage from '../../assests/pi4.jpg'
import data from './data'
import './header.css'

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <div className='header__profile'>
          <img src={HeaderImage} alt='Header Portrait' />
        </div>
        <h3>Dharshini</h3>
        <p>I’m a tireless, prolific, optimistic, passionate individual seeking a magnifying opportunity in a reputed firm. I possess 
          key strengths in communication; the ability in building a strong relationship with peers to discuss and advance the best idea thus 
          bringing out a constructive outcome for the company.</p>
          <div className='header__cta'>
            <a href ="#contact" className='btn primary'>Let's talk</a>
            <a href="#portfolio" className='btn light'>My Work</a>
          </div>
          <div className="header__socials">
            {
              data.map(item => <a key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'>{item.icon}</a>)
            }
          </div>
      </div>
    </header>
  )
}

export default Header
