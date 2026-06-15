import type { Iradio } from '../../interfaces/radio.interface'
import useStore from '../../store/states/radios'
import './radioCard.css'
import { FaCirclePlay } from 'react-icons/fa6'

export const RadioCard = (radioData:{radioData: Iradio}) =>{
    const {setRadioSelected} = useStore()
    
    return(
        <div className='radioCard' onClick={()=> setRadioSelected(radioData.radioData)}>
            <div className='radioCard__imageContainer'>
                <img src={radioData.radioData.imagen} alt={radioData.radioData.nombre}/>
                <div className='radioCard__overlay'>
                    <button className='radioCard__playButton'>
                        <FaCirclePlay />
                    </button>
                </div>
            </div>
            <div className='radioCard__content'>
                <h3>{radioData.radioData.nombre}</h3>
                <p className='radioCard__category'>{radioData.radioData.categoria || 'Podcast'}</p>
            </div>
        </div>
    )
}