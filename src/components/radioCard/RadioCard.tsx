import type { Iradio } from '../../interfaces/radio.interface'
import useStore from '../../store/states/radios'
import './radioCard.css'

export const RadioCard = (radioData:{radioData: Iradio}) =>{
    const {setRadioSelected} = useStore()
    return(
        <div className='radioCard' onClick={()=> setRadioSelected(radioData.radioData)}>
            <div className='radioCard__header'>
                <h3>{radioData.radioData.nombre}</h3>
            </div>
            <div className='radioCard_img'>
                <img src={radioData.radioData.imagen} alt=""/>
            </div>
        </div>
    )
}