import data from './data'
import Card from '../../components/Card'
import './services.css'

export const Services = () => {
  return (
    <section id='services'>
      <h1>My Services</h1>
      <div className='container services__container'>
      <div className='services__cards'>
            {
              data.map(item => (
                <Card key={item.id} className="services__card">
                  <span className='services__card-icon'>{item.icon}</span>
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

export default Services
