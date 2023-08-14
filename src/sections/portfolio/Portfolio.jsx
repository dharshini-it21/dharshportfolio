import data from './data'
import Card from '../../components/Card'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
      <div className='portfolio__cards'>
            {
              data.map(item => (
                <Card key={item.id} className="portfolio__card">
                  <img src={item.image} alt='{item.title}' style={{ display: "block", margin: "0 auto", height: "300px", width: "500px" }}/>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
        </div>
    
    </section>
  )
}

export default Portfolio
