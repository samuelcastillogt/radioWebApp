import { useState, useEffect } from 'react'
import { Header } from './components/Header/Header'
import { radiosService } from './services/radios.service'
import { RaddioCard } from './components/radioCard/RadioCard'
function App() {
  const [radios, setRadios] = useState([])
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
<div>
    {
      radios.length > 0 && radios.map((radio: any)=> <RaddioCard key={radio.id} radioData={radio.data} />)
    }
      </div>
    </>
  )
}

export default App
