import { useEffect } from 'react'
import { Header } from './components/Header/Header'
import { radiosService } from './services/radios.service'
import { RadioCard } from './components/radioCard/RadioCard'
import type { IradioData } from './interfaces/radio.interface'
import useStore from './store/states/radios'
import { Modal } from './components/Modal/Modal'
import './App.css'

function App() {
  const {radios, setRadios, radioSelected} = useStore()
  
  useEffect(()=>{
    ;(async()=>{
      const radios = await radiosService.getRadios()
      setRadios(radios)
    })()
  }, [setRadios])

  return (
    <>
      <Header />
      
      <main className='main'>
        <section className='hero'>
          <div className='hero__content'>
            <h2 className='hero__title'>Escucha Las Mejores Radios Online Gratis</h2>
            <p className='hero__description'>
              Descubre estaciones de radio y podcasts increíbles. Transmite en vivo, explora contenido nuevo y nunca te pierdas tus programas favoritos.
            </p>
            <button className='hero__cta'>Comienza a Escuchar</button>
          </div>
        </section>

        <section className='stations-section'>
          <div className='section-header'>
            <h2>Estaciones Destacadas</h2>
            <p>Explora nuestras estaciones de radio y podcasts seleccionados</p>
          </div>
          
          <div className='radios-container'>
            {
              radios && radios.length > 0 && radios.map((radio: IradioData) => 
                <RadioCard key={radio.id} radioData={radio.data} />
              )
            }
          </div>
        </section>

        <section className='categories-section'>
          <div className='section-header'>
            <h2>Categorías</h2>
            <p>Explora por tus géneros favoritos</p>
          </div>
          <div className='categories-grid'>
            <div className='category-card'>
              <div className='category-icon'>🎵</div>
              <h3>Música</h3>
              <p>Escucha tus artistas y canciones favoritas</p>
              <a href='#'>Más Información →</a>
            </div>
            <div className='category-card'>
              <div className='category-icon'>🎙️</div>
              <h3>Podcast</h3>
              <p>Podcasts variados sobre muchos temas</p>
              <a href='#'>Más Información →</a>
            </div>
            <div className='category-card'>
              <div className='category-icon'>📻</div>
              <h3>Noticias</h3>
              <p>Mantente informado con las noticias del día</p>
              <a href='#'>Más Información →</a>
            </div>
          </div>
        </section>
      </main>

      <div>
        {
          radioSelected && <Modal />
        }
      </div>
    </>
  )
}

export default App

