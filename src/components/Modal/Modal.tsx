import useStore from '../../store/states/radios'
import { IoIosCloseCircle } from "react-icons/io";
import { FaCirclePlay } from "react-icons/fa6";
import { FaPauseCircle } from "react-icons/fa";
import './modal.css'
import { useState } from 'react';

export const Modal = () => {
    const { radioSelected, closeRadioSelected } = useStore()
    const [isPlaying, setIsPlaying] = useState(false)

    const controlAudio = ()=>{
        const audio = document.getElementById('audio') as HTMLAudioElement
        if(audio){
            if(audio.paused){
                audio.play()
                setIsPlaying(true)
            } else {
                audio.pause()
                setIsPlaying(false)
            }
        }
    }
    return (
        <div className='modal'>
            {
                radioSelected && (
                    <div className='modal__content'>
                        <div className='modal-close'>
                            <IoIosCloseCircle onClick={() => closeRadioSelected()} />
                        </div>
                        <h2>{radioSelected.nombre}</h2>
                        <img src={radioSelected.imagen} alt="" />
                        <p>{radioSelected.categoria}</p>
                        <audio src={radioSelected.url} id='audio'>
                        </audio>
                        {isPlaying ? <FaPauseCircle onClick={controlAudio} className='icon'/> : <FaCirclePlay onClick={controlAudio} className='icon'/>}
                    </div>
                )
            }
        </div>
    )
}