import { useEffect } from 'react'
import { Header } from './components/Header/Header'
import { radiosService } from './services/radios.service'
import { RadioCard } from './components/radioCard/RadioCard'
import type { IradioData } from './interfaces/radio.interface'
import useStore from './store/states/radios'
import { Modal } from './components/Modal/Modal'
function App() {
  const {radios, setRadios, radioSelected} = useStore()
  const getRadios = async()=>{
    const radios = await radiosService.getRadios()
    setRadios(radios)
  }
  useEffect(()=>{
    getRadios()
  }, [])
  return (
    <>
<Header />
<div className='radios-container'>
    {
      radios && radios.length > 0 && radios.map((radio: IradioData)=> <RadioCard key={radio.id} radioData={radio.data} />)
    }
      </div>

      <div>
        {
          radioSelected && <Modal />
        }
      </div>
    </>
  )
}

export default App
